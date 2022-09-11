import headphone from '../assets/images/1.jpg'
import shoes from '../assets/images/2.jpg'
import camera from '../assets/images/3.jpg'

const Main = ({dark}) => {
    const data = [
        {
            name : "Headphone",
            price : 360,
            image : headphone
        },
        {
            name : "Shoe",
            price : 250,
            image : shoes
        },
        {
            name : "Camera & etc",
            price : 740,
            image : camera
        }
    ]
    return (
        <main>
            <div className="py-8 px-2 text-center text-2xl font-bold text-sky-700 dark:text-gray-400 transition-all">
                {dark ? "Dark mode is active" : "Light mode is active"}
            </div>
            <div className="container flex flex-wrap items-center justify-around gap-4 py-8 px-4 transition-all">
                {data.map((item,index) => (
                    <div key={index} className="md:flex-1 flex flex-col justify-between items-center gap-3 p-3 rounded bg-gray-300 dark:bg-sky-700">
                        <img src={item.image} alt={item.name} className="w-full h-60 object-cover"/>
                        <h2 className="font-bold dark:text-gray-300">{item.name}</h2>
                        <h3 className="font-bold dark:text-green-400 text-green-700">{`${item.price}$`}</h3>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;
