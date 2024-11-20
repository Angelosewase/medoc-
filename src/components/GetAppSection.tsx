

const GetAppSection = () => {
    return (
        <section className="py-16 md:px-20 px-4 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Get Our App</h2>
                <p className="text-lg mb-8">Download our app from the Play Store or App Store.</p>
                <div className="flex justify-center gap-4">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="p-4 bg-black rounded-lg">
                        <img src="/playStore.png" alt="Get it on Google Play" className="w-40" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="p-4 bg-black rounded-lg flex items-center gap-2">
                        <img src="/AppStore.png" alt="Download on the App Store" className=""  />
                        <p className="text-white text-xl">App Store</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GetAppSection;
