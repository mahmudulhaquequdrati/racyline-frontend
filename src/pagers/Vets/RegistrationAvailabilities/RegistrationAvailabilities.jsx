const RegistrationAvailabilities = () => {
  return (
    <>
      <section className="bg-[#e8981f1f] ">
        <div className="container">
          <div className="h-[calc(100vh-85px)] flex items-center justify-center">
            {/* Title Content */}
            <div className="w-[638px] bg-white p-16">
              <h1 className="text-[32px] font-bold leading-10">
                Inserisci le tue disponibilità
              </h1>

              <p>
                Aggiungi tutti i tuoi orari lavorativi per ogni giorno della
                settimana per concludere la registrazione
              </p>
            </div>
            <form>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationAvailabilities;
