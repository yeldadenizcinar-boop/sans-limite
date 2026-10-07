import React from 'react';
import { ShieldCheck, Cookie, FileText, CheckCircle2 } from 'lucide-react';
import { PageId, Language } from '../types';
import { getLocalizedData } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface LegalViewProps {
  language?: Language;
  pageType: 'mentions-legales' | 'politique-confidentialite' | 'gestion-cookies' | 'accessibilite';
  onOpenCookiePreferences: () => void;
}

export const LegalView: React.FC<LegalViewProps> = ({
  language = 'fr',
  pageType,
  onOpenCookiePreferences,
}) => {
  const t = TRANSLATIONS[language];
  const { associationInfo } = getLocalizedData(language);
  const isEn = language === 'en';

  return (
    <div className="space-y-12 pb-16">
      {/* 10a. MENTIONS LÉGALES */}
      {pageType === 'mentions-legales' && (
        <>
          <PageBanner
            title={isEn ? 'Legal Notice' : 'Mentions Légales'}
            subtitle={
              isEn
                ? 'Legal identity, host details, and terms of service of the Sans Limite association.'
                : "Informations juridiques, identification de l'éditeur et conditions générales d'utilisation du site de l'association Sans Limite."
            }
            badge={isEn ? 'Legal information' : 'Informations légales'}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '1. Website Publisher' : '1. Éditeur du site'}
              </h2>
              <p>
                {isEn ? (
                  <>
                    The website <strong>Sans Limite</strong> is published by the association{' '}
                    <strong>Sans Limite</strong>, a French registered non-profit organization under
                    the Law of 1 July 1901 and decree of 16 August 1901.
                  </>
                ) : (
                  <>
                    Le site internet <strong>Sans Limite</strong> est édité par l&apos;association{' '}
                    <strong>Sans Limite</strong>, association à but non lucratif régie par la loi du
                    1er juillet 1901 et le décret du 16 août 1901.
                  </>
                )}
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-600">
                <li>
                  <strong>{isEn ? 'Registered office:' : 'Siège social :'}</strong>{' '}
                  {associationInfo.fullAddress}
                </li>
                <li>
                  <strong>{isEn ? 'SIRET registration number:' : 'Numéro SIRET :'}</strong>{' '}
                  {associationInfo.siret}
                </li>
                <li>
                  <strong>{isEn ? 'Founded:' : 'Année de création :'}</strong>{' '}
                  {associationInfo.foundedYear}
                </li>
                <li>
                  <strong>{isEn ? 'Email:' : 'Courriel :'}</strong> {associationInfo.email}
                </li>
                <li>
                  <strong>{isEn ? 'Phone:' : 'Téléphone :'}</strong> {associationInfo.phone}
                </li>
                <li>
                  <strong>{isEn ? 'Publication Director:' : 'Directrice de la publication :'}</strong>{' '}
                  Assia O., {isEn ? 'President of Sans Limite.' : "en sa qualité de Présidente de l'association Sans Limite."}
                </li>
              </ul>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '2. Web Hosting' : '2. Hébergement du site'}
              </h2>
              <p>
                {isEn
                  ? 'The website is hosted on secure European cloud servers compliant with GDPR privacy standards:'
                  : 'Le site est hébergé sur des serveurs sécurisés conformes aux normes européennes de protection des données :'}
              </p>
              <p className="text-slate-600">
                Google Cloud Platform / Cloud Run ({isEn ? 'Western Europe Region — Paris / Frankfurt' : "Région Europe de l'Ouest — Paris / Francfort"}),
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande.
              </p>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '3. Intellectual Property' : '3. Propriété intellectuelle'}
              </h2>
              <p>
                {isEn
                  ? 'All assets, texts, logos, photographs, graphics and methodological toolkits are the exclusive property of Sans Limite or used with express permission from its partners.'
                  : "L'ensemble des éléments composant ce site (textes, logos, photographies, vidéos, éléments graphiques, boîtes à outils méthodologiques) est la propriété exclusive de l'association Sans Limite ou fait l'objet d'une autorisation d'utilisation expresse de ses partenaires."}
              </p>
              <p>
                {isEn
                  ? 'Any reproduction or distribution without prior written consent is strictly prohibited.'
                  : 'Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable.'}
              </p>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '4. Photo Credits' : '4. Crédits photographiques'}
              </h2>
              <p>
                {isEn
                  ? 'Field photography taken by volunteers, facilitators, and participants of Sans Limite during community activities in Paris, Vitry-sur-Seine, and European Erasmus+ mobilities.'
                  : "Photographies de terrain réalisées par les bénévoles et participants de l'association Sans Limite lors des projets à Paris, Vitry-sur-Seine et lors des mobilités européennes Erasmus+."}
              </p>
            </section>
          </div>
        </>
      )}

      {/* 10b. POLITIQUE DE CONFIDENTIALITÉ */}
      {pageType === 'politique-confidentialite' && (
        <>
          <PageBanner
            title={isEn ? 'Privacy Policy' : 'Politique de Confidentialité'}
            subtitle={
              isEn
                ? 'Personal data protection and full GDPR compliance by the Sans Limite association.'
                : "Protection des données personnelles et respect du RGPD par l'association Sans Limite."
            }
            badge={isEn ? 'GDPR Compliance' : 'RGPD & CNIL'}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '1. Data Controller' : '1. Responsable du traitement'}
              </h2>
              <p>
                {isEn ? (
                  <>
                    The controller for personal data collected on this website is the association{' '}
                    <strong>Sans Limite</strong>, represented by its President. Contact:{' '}
                    <a
                      href={`mailto:${associationInfo.email}`}
                      className="text-[#1E3A8A] font-semibold underline"
                    >
                      {associationInfo.email}
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Le responsable du traitement des données personnelles collectées sur le site est
                    l&apos;association <strong>Sans Limite</strong>, représentée par sa Présidente.
                    Contact :{' '}
                    <a
                      href={`mailto:${associationInfo.email}`}
                      className="text-[#1E3A8A] font-semibold underline"
                    >
                      {associationInfo.email}
                    </a>
                    .
                  </>
                )}
              </p>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '2. Collected Data & Purposes' : '2. Données collectées et finalités'}
              </h2>
              <ul className="space-y-2 list-disc pl-4 text-slate-600">
                {isEn ? (
                  <>
                    <li><strong>Contact Form:</strong> name, email, phone, subject, message (purpose: responding to your inquiry).</li>
                    <li><strong>Erasmus+ Applications:</strong> identity, motivation, city, special needs (purpose: delegation selection following European Commission guidelines).</li>
                    <li><strong>Workshop Registrations:</strong> name, contact, number of attendees (purpose: attendance management and event updates).</li>
                    <li><strong>Newsletter:</strong> email address (purpose: monthly community newsletter, 1-click unsubscribe).</li>
                    <li><strong>Donations & Membership:</strong> processed securely through HelloAsso for official French Cerfa tax receipts.</li>
                  </>
                ) : (
                  <>
                    <li><strong>Formulaire de contact :</strong> nom, email, téléphone, objet, message (finalité : réponse aux demandes d&apos;information).</li>
                    <li><strong>Candidatures Erasmus+ :</strong> état civil, motivation, ville, besoins spécifiques (finalité : sélection des délégations et respect des critères de l&apos;agence européenne).</li>
                    <li><strong>Inscriptions aux ateliers (Agenda) :</strong> coordonnées, nombre de personnes (finalité : gestion des jauges et envoi des rappels pratiques).</li>
                    <li><strong>Lettre d&apos;information (Newsletter) :</strong> adresse email (finalité : envoi des actualités associatives mensuelles, désinscription en un clic).</li>
                    <li><strong>Adhésions et dons :</strong> gérés en conformité avec HelloAsso pour l&apos;émission des cartes de membres et des reçus fiscaux Cerfa.</li>
                  </>
                )}
              </ul>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '3. Legal Basis and Data Retention' : '3. Base légale et durée de conservation'}
              </h2>
              <p>
                {isEn
                  ? 'Data processing is grounded either on your explicit consent (mandatory opt-in checkboxes) or contractual fulfillment (membership registration, Erasmus+ mobility contract).'
                  : "Les traitements reposent soit sur votre consentement explicite (cases à cocher obligatoires), soit sur l'exécution contractuelle (gestion de l'adhésion ou d'une convention de mobilité Erasmus+)."}
              </p>
              <p>
                {isEn
                  ? 'Contact inquiries are retained for up to 3 years. Erasmus+ application files are kept according to EU auditing requirements (5 years following project closure).'
                  : "Les données de contact sont conservées pendant une durée maximale de 3 ans après le dernier contact. Les dossiers de candidatures Erasmus+ sont conservés pour la durée d'audit imposée par la Commission européenne (5 ans après la clôture du projet)."}
              </p>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? '4. Your Rights and Inquiries (CNIL)' : '4. Vos droits et réclamations (CNIL)'}
              </h2>
              <p>
                {isEn
                  ? 'In compliance with the General Data Protection Regulation (GDPR), you hold the right to access, rectify, erase, restrict, object to and export your personal data.'
                  : "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données."}
              </p>
              <p>
                {isEn ? 'To exercise your rights, email us at:' : 'Pour exercer ces droits, contactez-nous directement par email à :'}{' '}
                <strong>{associationInfo.email}</strong>.
              </p>
            </section>
          </div>
        </>
      )}

      {/* 10c. GESTION DES COOKIES */}
      {pageType === 'gestion-cookies' && (
        <>
          <PageBanner
            title={isEn ? 'Cookie Management' : 'Gestion des Cookies'}
            subtitle={
              isEn
                ? 'Full transparency on cookies and privacy trackers used on Sans Limite.'
                : 'Transparence sur les traceurs utilisés sur le site Sans Limite et modification de vos préférences.'
            }
            badge={isEn ? 'Privacy & Trackers' : 'Traceurs & Vie privée'}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-slate-900">
                    {isEn ? 'Your current preferences' : 'Vos préférences actuelles'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isEn
                      ? 'You can change your consent preferences at any time.'
                      : 'Vous pouvez modifier vos choix de consentement à tout instant.'}
                  </p>
                </div>
                <button
                  onClick={onOpenCookiePreferences}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors"
                >
                  {isEn ? 'Open cookie preferences panel' : 'Ouvrir le panneau de configuration'}
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900">
                    {isEn ? '1. Essential technical cookies' : '1. Cookies techniques indispensables'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {isEn
                      ? 'These cookies ensure the core functions of the website, language choice, and security settings. They are strictly exempt from consent.'
                      : "Ces cookies assurent le bon affichage de l'application, la mémorisation de vos choix de sécurité et la navigation fluide. Ils sont exemptés de consentement."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900">
                    {isEn ? '2. Anonymous audience measurement' : "2. Mesure d'audience anonyme"}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {isEn
                      ? 'Provides aggregated privacy-safe analytics to help us improve the reach and accessibility of our non-profit activities.'
                      : "Permet d'obtenir des statistiques agrégées (nombre de visites, pages les plus lues) pour améliorer l'accessibilité de nos ressources associatives."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900">
                    {isEn ? '3. Third-party media content' : '3. Contenus multimédias tiers'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {isEn
                      ? 'Allows embedding our YouTube video reports and interactive workshop maps directly on our site.'
                      : "Permet de visionner nos reportages YouTube et d'afficher les cartes interactives de nos lieux d'ateliers sans quitter notre site."}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}

      {/* 10d. ACCESSIBILITÉ */}
      {pageType === 'accessibilite' && (
        <>
          <PageBanner
            title={isEn ? 'Accessibility Statement' : "Déclaration d'Accessibilité"}
            subtitle={
              isEn
                ? 'Sans Limite association commitments towards a web accessible to all (WCAG 2.1 AA).'
                : "Engagements de l'association Sans Limite pour un web accessible à toutes et tous (WCAG 2.1 AA)."
            }
            badge={isEn ? 'Digital Inclusion' : 'Inclusion numérique'}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? 'Compliance Status' : 'État de conformité'}
              </h2>
              <p>
                {isEn
                  ? 'Sans Limite is committed to digital accessibility in accordance with WCAG 2.1 Level AA guidelines.'
                  : "L'association Sans Limite s'engage à rendre son site internet accessible conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005."}
              </p>
              <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                {isEn ? (
                  <>
                    <li>High color contrast ratios between text and background.</li>
                    <li>Full keyboard accessibility with visible focus rings.</li>
                    <li>Detailed alternative text (<code>alt</code>) across images.</li>
                    <li>Clear semantic markup (H1 to H4 hierarchy, ARIA landmarks).</li>
                    <li>Declared primary language headers.</li>
                  </>
                ) : (
                  <>
                    <li>Contraste suffisant entre la couleur du texte et l&apos;arrière-plan.</li>
                    <li>Navigation intégrale possible au clavier avec focus visible.</li>
                    <li>Alternative textuelle détaillée (attribut <code>alt</code>) sur l&apos;ensemble des photographies.</li>
                    <li>Balises sémantiques claires (titres hiérarchisés H1 à H4, repères ARIA).</li>
                    <li>Langue principale déclarée (<code>lang=&quot;fr&quot;</code>).</li>
                  </>
                )}
              </ul>
            </section>

            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-bold text-slate-900">
                {isEn ? 'Feedback and Contact' : 'Signalement et contact'}
              </h2>
              <p>
                {isEn ? (
                  <>
                    If you experience any accessibility barrier on our site, please email us at{' '}
                    <a
                      href={`mailto:${associationInfo.email}`}
                      className="text-[#1E3A8A] font-semibold underline"
                    >
                      {associationInfo.email}
                    </a>{' '}
                    so we can assist you with accessible formats.
                  </>
                ) : (
                  <>
                    Si vous rencontrez une difficulté d&apos;accès à un contenu ou à un formulaire, vous
                    pouvez nous contacter par email à{' '}
                    <a
                      href={`mailto:${associationInfo.email}`}
                      className="text-[#1E3A8A] font-semibold underline"
                    >
                      {associationInfo.email}
                    </a>{' '}
                    afin que nous vous transmettions l&apos;information sous une forme accessible.
                  </>
                )}
              </p>
            </section>
          </div>
        </>
      )}
    </div>
  );
};
