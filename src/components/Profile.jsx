import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const Profile = ({ image, name, especie, genero, edad, ocupacion }) => {
    const profileRef = useRef(null);

    const handleDownload = () => {
        if (profileRef.current) {
            html2canvas(profileRef.current).then(canvas => {
                const link = document.createElement('a');
                link.download = 'profile_card.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }
    }

    return (
        <div ref={profileRef} className="max-w-sm rounded-md shadow-lg bg-blue-200">
            <img className="w-full h-72" src={image} alt="profile" />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{name}</p>
                <p className="font-bold text-xl mb-2">{especie}</p>
                <p className="font-bold text-xl mb-2">{genero}</p>
                <p className="font-bold text-xl mb-2">{edad}</p>
                <p className="font-bold text-xl mb-2">{ocupacion}</p>
                
            </div>
            <div className="px-6 pt-4 pb-2">
                <button 
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    onClick={handleDownload}
                >
                    Descargar
                </button>
            </div>
        </div>
    );
}

export default Profile;