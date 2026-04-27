import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediBuddies - Your Post-Appointment AI Companion",
  description: "Helping you receive correct guidance & education on taking care of oneself after a doctor's appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
        <Script id="watsonx-script" dangerouslySetInnerHTML={{
          __html: `
            window.wxOConfiguration = {
              orchestrationID: "3ab0601803dd4bbebffce39b365df26a_cf7c711f-2181-43b5-8842-3db0ad7a2473",
              hostURL: "https://au-syd.watson-orchestrate.cloud.ibm.com",
              rootElementID: "root",
              deploymentPlatform: "ibmcloud",
              crn: "crn:v1:bluemix:public:watsonx-orchestrate:au-syd:a/3ab0601803dd4bbebffce39b365df26a:cf7c711f-2181-43b5-8842-3db0ad7a2473::",
              chatOptions: {
                  agentId: "269316a6-13b6-44e5-b7f7-b59839ce9c4f", 
                  agentEnvironmentId: "89d57805-4615-4a7a-bbc9-86e152b1fc91",
              }
            };
            setTimeout(function () {
              const script = document.createElement('script');
              script.src = \`\${window.wxOConfiguration.hostURL}/wxochat/wxoLoader.js?embed=true\`;
              script.addEventListener('load', function () {
                  wxoLoader.init();
              });
              document.head.appendChild(script);
            }, 0);
          `
        }} />
      </body>
    </html>
  );
}
