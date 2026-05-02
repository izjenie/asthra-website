import { useState } from 'react'

const legalContent: Record<string, { title: string; body: string }> = {
  'Privacy Policy': {
    title: 'Privacy Policy',
    body: `Asthra Nuventures, Pte. Ltd. ("Asthra", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at asthra.io (the "Site") or engage with our services.

Information We Collect
We may collect personal information that you voluntarily provide to us when you:
- Request a deployment assessment or contact us through our forms
- Subscribe to updates or communications
- Engage with our sales or support teams

This information may include your name, job title, company name, email address, phone number, and any other details you choose to provide.

We also automatically collect certain information when you visit the Site, such as your IP address, browser type, operating system, access times, and pages viewed.

How We Use Your Information
We use the information we collect to:
- Respond to your inquiries and provide requested services
- Communicate with you about our products, services, and updates
- Improve our website, products, and services
- Comply with legal obligations and enforce our agreements
- Protect against fraudulent, unauthorized, or illegal activity

Information Sharing and Disclosure
We do not sell, trade, or rent your personal information to third parties. We may share information with:
- Service providers who perform services on our behalf
- Business partners with whom we jointly offer products or services
- Law enforcement or regulatory authorities when required by applicable law
- Affiliated entities within our corporate group

Data Security
We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.

Data Retention
We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.

Your Rights
Depending on your location, you may have certain rights regarding your personal information, including the right to:
- Access, correct, or delete your personal information
- Object to or restrict certain processing activities
- Withdraw consent where processing is based on consent
- Lodge a complaint with a supervisory authority

Changes to This Policy
We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Effective Date" and will be effective as soon as it is accessible.

Contact Us
If you have any questions about this Privacy Policy, please contact us at legal@asthra.io.`,
  },
  'Terms of Service': {
    title: 'Terms of Service',
    body: `These Terms of Service ("Terms") govern your access to and use of the website at asthra.io (the "Site") and any services, products, or content made available by Asthra Nuventures, Pte. Ltd. ("Asthra", "we", "us", or "our"). By accessing or using the Site, you agree to be bound by these Terms.

Use of the Site
You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
- In any way that violates any applicable law or regulation
- To transmit any material that is unlawful, harmful, threatening, defamatory, or otherwise objectionable
- To impersonate or attempt to impersonate Asthra, an Asthra employee, or any other person or entity
- To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site
- To introduce any malicious software, viruses, or harmful code

Intellectual Property
The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Asthra, its licensors, or other providers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without prior written consent from Asthra.

Trademarks
The Asthra name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Asthra or its affiliates. You may not use such marks without prior written permission.

Disclaimer of Warranties
The Site and its content are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. Asthra does not warrant that the Site will be uninterrupted, timely, secure, or error-free.

Limitation of Liability
To the fullest extent permitted by applicable law, Asthra shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, the Site or services.

Indemnification
You agree to defend, indemnify, and hold harmless Asthra, its affiliates, licensors, and service providers from any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms.

Governing Law and Jurisdiction
These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions. Any legal action arising out of these Terms shall be brought exclusively in the courts of Singapore.

Changes to These Terms
We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when posted. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.

Contact Information
Questions about these Terms should be sent to legal@asthra.io.`,
  },
  'Cookie Policy': {
    title: 'Cookie Policy',
    body: `This Cookie Policy explains how Asthra Nuventures, Pte. Ltd. ("Asthra", "we", "us", or "our") uses cookies and similar technologies on our website at asthra.io (the "Site"). By using the Site, you consent to the use of cookies in accordance with this policy.

What Are Cookies
Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.

Types of Cookies We Use

Essential Cookies: These cookies are necessary for the Site to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.

Analytics Cookies: We use analytics cookies to understand how visitors interact with our Site. This helps us improve the user experience and optimize our content. These cookies collect information in an aggregated and anonymous form.

Functionality Cookies: These cookies enable the Site to remember choices you make (such as your language preferences) and provide enhanced, more personalized features.

Third-Party Cookies
Some cookies may be placed by third-party services that appear on our pages. We do not control the use of these cookies and you should check the relevant third party's website for more information.

Managing Cookies
Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can choose to:
- Accept all cookies
- Be notified when a cookie is issued
- Reject all cookies
- Delete existing cookies

Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our Site.

Changes to This Policy
We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated effective date.

Contact Us
If you have any questions about our use of cookies, please contact us at legal@asthra.io.`,
  },
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      // @ts-ignore
      const lenis = window.__lenis
      if (lenis && lenis.scrollTo) {
        lenis.scrollTo(el, { offset: 0, duration: 1.5 })
      } else {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const openModal = (title: string) => {
    const content = legalContent[title]
    if (content) {
      setModalContent(content)
      setModalOpen(true)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalContent(null)
  }

  return (
    <>
      <footer
        className="relative w-full py-[4vw] px-[5vw]"
        style={{ backgroundColor: '#000000', borderTop: '1px solid #222226' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[3vw] max-w-[90vw] mx-auto mb-[4vw]">
          {/* Column 1 - Brand */}
          <div>
            <div className="text-off-white text-xs tracking-[0.3em] font-medium mb-4">
              asthra.io
            </div>
            <p className="text-sm" style={{ color: '#b0b0b2' }}>
              Frontier AI, Entirely Yours.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <div className="text-label mb-4" style={{ color: '#646466' }}>NAVIGATION</div>
            <ul className="space-y-2">
              {[
                { label: 'Platform', id: 'platform' },
                { label: 'Models', id: 'models' },
                { label: 'Solutions', id: 'solutions' },
                { label: 'About', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm transition-colors duration-300 hover:text-off-white"
                    style={{ color: '#b0b0b2' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <div className="text-label mb-4" style={{ color: '#646466' }}>LEGAL</div>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => openModal(item)}
                    className="text-sm transition-colors duration-300 hover:text-off-white"
                    style={{ color: '#b0b0b2' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <div className="text-label mb-4" style={{ color: '#646466' }}>CONTACT</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs mb-1" style={{ color: '#646466' }}>Singapore</div>
                <div className="text-sm" style={{ color: '#b0b0b2' }}>
                  ASTHRA NUVENTURES PTE. LTD.<br />
                  138 ROBINSON ROAD, #02-26<br />
                  OXLEY TOWER, Singapore 68906<br />
                  sales@asthra.io
                </div>
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: '#646466' }}>Partnerships</div>
                <div className="text-sm" style={{ color: '#b0b0b2' }}>
                  partnerships@asthra.io
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center pt-[2vw]"
          style={{ borderTop: '1px solid #222226' }}
        >
          <div className="text-label" style={{ color: '#646466' }}>
            (c) Copyright 2025-2026 Asthra Nuventures, Pte. Ltd. All Rights Reserved.
          </div>
          <div className="text-label mt-2 md:mt-0" style={{ color: '#646466' }}>
            Sovereign AI Infrastructure for the Enterprise
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modalOpen && modalContent && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(4px)' }}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 relative mx-4"
            style={{ backgroundColor: '#0a0a0a', border: '1px solid #222226', borderRadius: '8px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="sticky top-0 float-right ml-2 mb-2 text-off-white hover:text-accent transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <h3
              className="text-2xl font-medium mb-6 pr-8"
              style={{ color: '#ececec', fontFamily: "'Clash Display', sans-serif" }}
            >
              {modalContent.title}
            </h3>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#b0b0b2' }}>
              {modalContent.body.split('\n\n').map((paragraph, i) => {
                const isHeading = paragraph.trim() && !paragraph.includes('.') && paragraph.length < 60
                if (isHeading) {
                  return (
                    <h4 key={i} className="text-base font-medium mt-6 mb-2" style={{ color: '#ececec' }}>
                      {paragraph}
                    </h4>
                  )
                }
                return (
                  <p key={i}>
                    {paragraph.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < paragraph.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
