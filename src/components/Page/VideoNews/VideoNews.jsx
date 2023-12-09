

const VideoNews = () => {
    return (
        <div className=" bg-[#860A35] py-10">
            <h1 className=" text-4xl text-center font-bold  text-white">AS<span className=" text-green-500">TH</span>MA</h1>
        <div className=" flex justify-evenly items-center">
            <div>
                <img className=" w-[360px] h-[315px]" src="https://i.ibb.co/MRb46JN/mother-treats-her-daughter-home.jpg" alt="" />
                <h1 className=" font-semibold text-white">
                We accept both cash and online donations. <br /> Use the PayPal option to donate online.  <br />You do not need a Paypal account to be <br />Able to Donate</h1>
                <br />
               
            </div>
            <div className=" ml-20">
            <iframe width="460" height="315" src="https://www.youtube.com/embed/ozyruyITxKg?si=EWU7A1rj8gGNNzj-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1 className=" text-xl  font-bold text-white">Breathe easy, live freely: World Asthma Day.</h1>
            <br />
            <h1 className=" text-xl text-white font-bold">Asthma cant hold us back: lets raise awareness together</h1>
            <br />
            <h1 className=" text-xl text-white font-bold">Take control of your asthma: dont let it control you</h1>
            </div>
            
        </div>
        </div>
    );
};

export default VideoNews;