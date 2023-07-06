  const cc = initCookieConsent();
  cc.run({
    current_lang: 'nl',
    autoclear_cookies: true,                   // automatically clears existing cookies when a category is rejected/disabled.
    page_scripts: true,
    languages: {
      'en': {
        consent_modal: {
          title: 'We use cookies!',
          description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
          primary_btn: {
            text: 'ACCEPT ALL',
            role: 'accept_all'              // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: 'REJECT ALL',
            role: 'accept_necessary'        // 'settings' or 'accept_necessary'
          }
        },
        settings_modal: {
          title: 'Cookie preferences',
          save_settings_btn: 'SAVE SETTINGS',
          accept_all_btn: 'ACCEPT ALL',
          reject_all_btn: 'REJECT ALL',
          close_btn_label: 'CLOSE',
          cookie_table_headers: [
            { col1: 'Name' },
            { col2: 'Domain' },
            { col3: 'Expiration' },
            { col4: 'Description' }
          ],
          blocks: [
            {
              title: 'Cookie usage 📢',
              description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy" class="cc-link">privacy policy</a>.',
            }, {
              title: 'Strictly necessary cookies',
              description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
              }
            }, {
              title: 'Performance and Analytics cookies',
              description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
              toggle: {
                value: 'analytics',     // your cookie category
                enabled: false,
                readonly: false
              },
            }, {
              title: 'Advertisement cookies',
              description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
              toggle: {
                value: 'targeting',
                enabled: false,
                readonly: false
              }
            }, {
              title: 'Functional cookies',
              description: 'These cookies add extra functionalities to this website. If disabled some functionalities may not work as intended.',
              toggle: {
                value: 'functional',
                enabled: false,
                readonly: false
              }
            }, {
              title: 'More information',
              description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/contact">contact us</a>.',
            }
          ]
        }
      },

      'nl': {
        consent_modal: {
          title: 'Wij gebruiken cookies!',
          description: 'Hallo, deze website gebruikt essentiële cookies om de goede werking ervan te garanderen en tracking cookies om te begrijpen hoe u ermee omgaat. Dit laatste wordt pas ingesteld na toestemming. <button type="button" data-cc="c-settings" class="cc-link">Laat mij kiezen</button>',
          primary_btn: {
            text: 'ACCEPTEER ALLES',
            role: 'accept_all'              // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: 'WEIGER ALLES',
            role: 'accept_necessary'        // 'settings' or 'accept_necessary'
          }
        },
        settings_modal: {
          title: 'Cookievoorkeuren',
          save_settings_btn: 'KEUZES OPSLAAN',
          accept_all_btn: 'ACCEPTEER ALLES',
          reject_all_btn: 'WEIGER ALLES',
          close_btn_label: 'SLUITEN',
          cookie_table_headers: [
            { col1: 'Name' },
            { col2: 'Domain' },
            { col3: 'Expiration' },
            { col4: 'Description' }
          ],
          blocks: [
            {
              title: 'Cookie gebruik 📢',
              description: 'Cookies worden gebruikt om de basisfunctionaliteiten van de website te waarborgen en om uw online ervaring te verbeteren. U kunt voor elke categorie kiezen om u aan of af te melden wanneer u maar wilt. Bekijk onze <a href="/privacy" class="cc-link">privacybeleid</a> voor meer details met betrekking tot cookies en andere gevoelige gegevens.',
            }, {
              title: 'Strikt noodzakelijke cookies',
              description: 'Deze cookies zijn essentieel voor het goed functioneren van de website. Zonder deze cookies zou de website niet goed werken',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
              }
            }, {
              title: 'Prestatie- en analysecookies',
              description: 'Deze cookies verzamelen informatie over hoe je de website gebruikt, welke pagina\'s je hebt bezocht en op welke links je hebt geklikt. Alle gegevens zijn geanonimiseerd en kunnen niet worden gebruikt om u te identificeren',
              toggle: {
                value: 'analytics',     // your cookie category
                enabled: false,
                readonly: false
              },
            }, {
              title: 'Advertentie cookies',
              description: 'Deze cookies verzamelen gegevens over keuzes die jij maakt op de website.',
              toggle: {
                value: 'targeting',
                enabled: false,
                readonly: false
              }
            }, {
              title: 'Functionele cookies',
              description: 'Deze cookies voegen extra functionaliteiten toe aan deze website. Indien uitgeschakeld, werken sommige functies mogelijk niet zoals verwacht.',
              toggle: {
                value: 'functional',
                enabled: false,
                readonly: false
              }
            }, {
              title: 'Meer informatie',
              description: 'Neem <a class="cc-link" href="/contact">contact met ons op</a> voor vragen over ons beleid inzake cookies en uw keuzes.',
            }
          ]
        }
      }
    }
  });