import { useEffect, useState } from "react";

declare global {
    interface Window {
        BrevoConversationsID?: string;
        BrevoConversationsConfig?: {
            verticalSpacing?: number;
            horizontalSpacing?: number;
        };
        BrevoConversations?: any;
    }
}

export default function ChatWidgetManager() {
    const [activeWidget, setActiveWidget] = useState<"brevo" | "jotform" | null>(null);
    const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

    // User interaction listener to defer loading heavy chat scripts
    useEffect(() => {
        const handleInteraction = () => {
            setShouldLoadWidget(true);
            ["scroll", "mousemove", "touchstart", "keydown"].forEach((event) =>
                window.removeEventListener(event, handleInteraction)
            );
        };

        ["scroll", "mousemove", "touchstart", "keydown"].forEach((event) =>
            window.addEventListener(event, handleInteraction, { passive: true })
        );

        // Fallback timer (4 seconds)
        const timer = setTimeout(() => {
            setShouldLoadWidget(true);
        }, 4000);

        return () => {
            clearTimeout(timer);
            ["scroll", "mousemove", "touchstart", "keydown"].forEach((event) =>
                window.removeEventListener(event, handleInteraction)
            );
        };
    }, []);

    // Time-based active widget check for Asia/Karachi timezone
    // Brevo: 5:30 PM (17:30) to 3:10 AM (03:10)
    // Jotform: Remaining hours
    useEffect(() => {
        const checkTimeAndSetWidget = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Karachi",
                hour12: false,
                hour: "numeric",
                minute: "numeric",
            };
            const formatter = new Intl.DateTimeFormat([], options);
            const timeParts = formatter.formatToParts(now);

            let currentHour = 0;
            let currentMinute = 0;

            timeParts.forEach((part) => {
                if (part.type === "hour") currentHour = parseInt(part.value, 10);
                if (part.type === "minute") currentMinute = parseInt(part.value, 10);
            });

            if (currentHour === 24) currentHour = 0;

            let isBrevoTime = false;
            const currentMinutesSinceMidnight = currentHour * 60 + currentMinute;
            const brevoStart = 17 * 60 + 30; // 5:30 PM (17:30)
            const brevoEnd = 3 * 60 + 10;   // 3:10 AM (03:10)

            if (brevoStart > brevoEnd) {
                if (
                    currentMinutesSinceMidnight >= brevoStart ||
                    currentMinutesSinceMidnight < brevoEnd
                ) {
                    isBrevoTime = true;
                }
            } else {
                if (
                    currentMinutesSinceMidnight >= brevoStart &&
                    currentMinutesSinceMidnight < brevoEnd
                ) {
                    isBrevoTime = true;
                }
            }

            if (isBrevoTime) {
                setActiveWidget("brevo");
            } else {
                setActiveWidget("jotform");
            }
        };

        checkTimeAndSetWidget();
        const interval = setInterval(checkTimeAndSetWidget, 60000);
        return () => clearInterval(interval);
    }, []);

    // Attach ad-click attribution (msclkid) to Brevo session if present in localStorage or URL
    useEffect(() => {
        if (activeWidget !== "brevo" || !shouldLoadWidget) return;

        try {
            const urlParams = new URLSearchParams(window.location.search);
            const msclkid = urlParams.get("msclkid") || localStorage.getItem("cp_msclkid");
            if (!msclkid) return;

            let attempts = 0;
            const maxAttempts = 20;
            const poll = setInterval(() => {
                attempts += 1;
                if (typeof window !== "undefined" && window.BrevoConversations) {
                    if (typeof window.BrevoConversations === "function") {
                        window.BrevoConversations("updateIntegrationData", {
                            msclkid,
                            ad_click_time: localStorage.getItem("cp_msclkid_ts") || new Date().toISOString(),
                            ad_landing_url: window.location.href,
                        });
                    }
                    clearInterval(poll);
                } else if (attempts >= maxAttempts) {
                    clearInterval(poll);
                }
            }, 300);

            return () => clearInterval(poll);
        } catch (e) {
            console.error(e);
        }
    }, [activeWidget, shouldLoadWidget]);

    // Dynamically load scripts for active widget
    useEffect(() => {
        if (!shouldLoadWidget || !activeWidget) return;

        if (activeWidget === "brevo") {
            // Remove Jotform script if it was present
            const existingJotform = document.getElementById("jotform-agent-auto-script");
            if (existingJotform) existingJotform.remove();

            window.BrevoConversationsID = "6a4bda091ec9d4d3c004acf1";
            window.BrevoConversationsConfig = {
                verticalSpacing: 120,
                horizontalSpacing: 20,
            };
            window.BrevoConversations =
                window.BrevoConversations ||
                function (...args: any[]) {
                    (window.BrevoConversations.q = window.BrevoConversations.q || []).push(args);
                };

            const scriptId = "brevo-conversations-script";
            if (!document.getElementById(scriptId)) {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
                script.async = true;
                document.head.appendChild(script);
            }

            const styleId = "brevo-widget-custom-style";
            if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
          #brevo-conversations-widget, 
          .brevo-conversations-widget,
          iframe[src*="conversations-widget.brevo.com"] {
            bottom: 120px !important;
          }
        `;
                document.head.appendChild(style);
            }
        } else if (activeWidget === "jotform") {
            // Remove Brevo script if it was present
            const existingBrevo = document.getElementById("brevo-conversations-script");
            if (existingBrevo) existingBrevo.remove();

            const scriptId = "jotform-agent-auto-script";
            if (!document.getElementById(scriptId)) {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src =
                    "https://cdn.jotfor.ms/agent/embedjs/019d4a7018e47a9ba9de1aa47b2de6686c0b/embed.js";
                script.async = true;
                document.head.appendChild(script);
            }
        }
    }, [activeWidget, shouldLoadWidget]);

    return null;
}
