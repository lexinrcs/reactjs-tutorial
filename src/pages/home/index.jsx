import homeImage from '../../assets/images/home.jpg'
import { useModal } from '../../components/_modals/ModalContext';
import { useState } from 'react';

const Home = () => {

    const { showModal } = useModal();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        // console.log('Input changed to:', value);
    }

    const handleSubmit = async () => {
        await showModal({
            title: 'Message Sent',
            description: 'Thank you for reaching out to us. We have received your message and will get back to you shortly.',
            confirmText: 'Confirm',
            isConfirmation: true,
            cancelText: 'Cancel',
            additionalDescription: 'This is an additional Message'
        }).then((confirmed) => {
            if (confirmed) {
                alert('You confirmed the action!');
            } else {
                alert('You cancelled the action!');
            }
        });
    }
    return (
        <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
            <img className="mb-5 h-[220px] w-full rounded-xl bg-greenCore-50 object-cover md:h-[200px]" src={homeImage} alt="Modern website workspace" />
            <h2 className="mb-3 text-2xl font-ManulifeBold text-slate-800"> Welcome to my Website</h2>
            
            {/* onChange Demo Input */}
            <div className="mb-4">
                <label className="mb-2 block font-ManulifeDemiBold text-slate-700">
                    Enter your message:
                </label>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type something here..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
                />
            </div>

            <p className="mb-4 max-w-3xl leading-7 text-slate-500">
                {inputValue || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-block rounded-lg bg-greenCore-500 px-5 py-3 text-center font-ManulifeDemiBold text-white no-underline transition-colors hover:bg-greenCore-600"> Learn More </button>
                <button className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-center font-ManulifeDemiBold text-greenCore-700 no-underline transition-colors hover:bg-greenCore-100" onClick={() => { handleSubmit() }}> Get in Touch</button>
            </div>
        </div>
    )
}

export default Home