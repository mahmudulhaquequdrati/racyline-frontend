import { useState } from "react";
import FAQCard from "./FAQCard";

import "./styles.css";
export default function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: "Posso integrare questo sistema nel mio sito web?",
      answer:
        "Assolutamente sì! Raccomandiamo vivamente di integrare il nostro sistema nel tuo sito web per massimizzare le prenotazioni. Puoi procedere all'integrazione in autonomia seguendo le nostre guide semplici e intuitive. Se preferisci assistenza diretta o hai bisogno di ulteriori chiarimenti, non esitare a organizzare una call con il nostro team. Siamo qui per supportarti in ogni fase.        ",
      open: true,
    },
    {
      question: "La sicurezza e la proprietà dei miei dati sono garantite?",
      answer:
        "Assolutamente sì. Garantiamo la massima sicurezza dei tuoi dati, dei quali mantieni l'unico proprietario. Utilizziamo la crittografia SSL per proteggere tutte le tue comunicazioni con il nostro sistema, prevenendo così qualsiasi tentativo di accesso non autorizzato        ",
      open: false,
    },
    {
      question: "Posso cancellare il mio profilo in qualsiasi momento?",
      answer:
        "Sì, puoi eliminare l'account in ogni momento. Calendarpet pone l'onestà e la trasparenza al primo posto, pertanto non applichiamo costi di cancellazione nascosti né imponiamo contratti a lungo termine vincolanti.      ",
      open: false,
    },
    {
      question: "È incluso il supporto per gli utenti?",
      answer:
        "Certamente. Offriamo assistenza tramite chat dal vivo e email a tutti i nostri utenti, garantendo supporto tempestivo e risposte alle tue domande.      ",
      open: false,
    },
    {
      question: "Ci sono costi aggiuntivi da considerare?",
      answer:
        "No, non ci sono brutte sorprese. Il servizio è attualmente fornito gratuitamente. In futuro, introdurremo un'opzione di abbonamento 'pro' per gli utenti interessati ad accedere a funzionalità avanzate, mantenendo comunque chiarezza e trasparenza riguardo a eventuali costi",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="my-40">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQCard faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
