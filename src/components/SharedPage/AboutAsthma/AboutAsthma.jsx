import { Helmet } from "react-helmet";

const AboutAsthma = () => {
  return (
    <div>
        <Helmet>
                <title>BreathNess EASE | OUR MISSION</title>
            </Helmet>
    <div className=" flex justify-evenly items-center ">
      <div>
        <h1 className=" text-4xl font-bold text-[#5FBDFF] text-center">
          ASTHMA THE BASIC FACTS
          <br />
          
          <hr className=" border border-[#C70039] " />
          <br />
        </h1>
        <p>Asthma is a common disease worldwide and its </p>
          <p>incidence is on the increase globally. It has been ranked as the  </p>
          <p>sixth greatest cause of morbidity. It is estimated that around </p>
          <p>300 million people{" "}worldwide currently have asthma and it is</p>
          <p> expected that a total{" "}of 400 million people will be affected</p>
           <p>by 2025. In United Kingdom,</p>
          <p> over 50 million people are suffering from Asthma and allergies,</p>
          <p>but in  Nigeria, it is assumed that about 10-15 million people</p>
          <p>may be suffering  from Asthma. Asthma affects all ages but it is</p>
          <p>commoner in children  and young adults. . In a recent study,</p>
          <p>14.1% of University students (Obafemi Awolowo University)  were</p>
          <p>found to have probable asthma and only 32.5% </p>
          <p>of these were previously diagnosed. Many people living with asthma{" "}</p>
          <p>have not been diagnosed and quite a lot are under-treated. However,</p>
        <br />
        <div>
          <div className="collapse collapse-plus bg-[#FFB534] border border-[#65B741]">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              WHAT IS ASTHMA?
            </div>
            <div className="collapse-content">
              
                <p>Asthma is a condition that causes temporary narrowing of</p>
               <p>airways in the lungs. During an</p>
                <p> asthma attack, the patient feels</p>
                <p>short of breath, wheeze  (noisy respiration), cough and</p>
                <p>of the chest. Fortunately the  narrowing of the airways</p>
                <p>lessens with prompt treatment </p>
                <p>although the degree of relief</p>
            </div>
          </div>
          <div className="collapse collapse-plus border-[#65B741] bg-[#D0A2F7]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              THE ASTHMATIC PROCESS:
            </div>
            <div className="collapse-content">
              <p>Asthma results when the airways</p>
                <p> in the lungs become hyperactive</p>
                <p>and hyper-responsive to irritants.</p>
                <p>Hyperactive means the lungs</p>
                <p>are more sensitive to irritants</p>
                <p>chemicals. Some of these chemicals</p>
                <p>inflammatory cells to the area.</p>
                <p> The lining of the broncxhial tubes of asthmatics contain more</p>
                <p> causing all the changes in the 
                lungs and lead to three main</p>
                
              
            </div>
          </div>
          <div className="collapse collapse-plus border-[#65B741] bg-[#FF5B22]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium ">
              TRIGGERS OF ASTHMA
            </div>
            <div className="collapse-content">
              <p>
                <p>Asthma symptoms can get worse for no apparent reason.</p> 
                <p>However,most asthma symptoms are caused</p> 
                <p>There are various kinds of triggers, some acting in isolation,</p>
                <p>others working together. The severity of Asthma depends on how</p>
                <p>many substances in the environment act as triggers and how</p>
                <p>sensitive the lung is to these substances.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className=" text-4xl font-bold text-[#C21292] text-center">SYMPTOMS OF ASTHMA</h1>
        <br />
        <hr className=" border border-[#C70039] " />
        <br />
        <p>
          The symptoms may occur intermittently, or continuously</p> 
          <p>in response to recognised trigger or out of the blues.</p> 
          <p>It can improve either
          spontaneously (that’s without intervention)</p> 
          <p>or after the use of drugs.</p>
          <p>This variability is so characteristic of asthma. The symptoms are</p>
        <br />
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item bg-[#497174] border border-[#C21292]">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium  text-white">
            Cough
            </div>
            <div className="collapse-content">
              <p className="text-white">Especially at night and after exercise or an exposure to triggers.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border bg-[#497174] border-[#C21292]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl text-white font-medium">
            Wheeze
            </div>
            <div className="collapse-content text-white">
              <p>A high-pitched whistling sound that can be heard during asthma attack.</p> 
                <p>However, all wheezes are not asthma. In fact if the asthma is</p> 
                <p>very severe there may not be enough movement of air through a </p>
                <p>person’s airways to produce the sound.</p>
                
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#497174] join-item border border-[#C21292]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-white">
            Shortness of breath
            </div>
            <div className="collapse-content text-white">
              <p>Especially during exercise or severe attack.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#497174] join-item border border-[#C21292]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-white">
            Chest tightness
            </div>
            <div className="collapse-content text-white">
              <p>This is an uncomfortable feeling in the chest which </p>
              <p>asthmatics experience during an attack of asthma.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#497174] join-item border border-[#C21292]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium text-white">
            Cough variant asthma
            </div>
            <div className="collapse-content text-white">
              <p>A few asthmatics do not present classically as above. </p>
                <p>They do not have trouble breathing and do ot wheeze.</p> 
                <p>However, they present with excessive coughing as the only symptom.</p> 
                <p>Doctors call this ‘cough variant asthma’. This group of </p>
                <p>individuals has persistent cough at night,</p> 
                <p>during exercise and when it is cold. This kind of cough is common amongst children.</p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div>
    <h1 className=" text-3xl  font-bold text-[#AF2655] text-center">BREATHING TESTS</h1>
    <br />
    <hr  />
    <p className=" text-center">To control asthma symptoms, you need to be in partnership with your phycisian. You must attend asthma clinics regularly, monitor your symptoms and take your</p> 
    <p className=" text-center">medications regularly. You also need to study your asthma and avoid triggers that initiate your asthma symptoms. Drugs are usually prescribed according to the severity</p> 
    <p className=" text-center">of your asthma and a step approach is used. This means that the more drugs are added if the asthma worsens and the number is reduced as it gets less severe.</p> 
    <p className=" text-center">Generally, drugs used in treating asthma are iun three groups: Preventers, Relievers and Lifesavers.</p>
    </div>
    <br />
    <br />
    <div>
    <h1 className=" text-3xl text-[#FFA732] font-bold text-center">MANAGEMENT OF ASTHMA</h1>
    <br />
    <hr />
    <p className=" text-center">To control asthma symptoms, you need to be in partnership with your phycisian. You must attend asthma clinics regularly, monitor your symptoms and take your</p> 
    <p className=" text-center">medications regularly. You also need to study your asthma and avoid triggers that initiate your asthma symptoms. Drugs are usually prescribed according to the severity</p> 
    <p className=" text-center">of your asthma and a step approach is used. This means that the more drugs are added if the asthma worsens and the number is reduced as it gets less severe.</p> 
    <p className=" text-center">Generally, drugs used in treating asthma are iun three groups: Preventers, Relievers and Lifesavers.</p>
    </div>
    </div>
  );
};

export default AboutAsthma;
