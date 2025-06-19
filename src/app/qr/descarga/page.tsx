"use client";

import Image from "next/image";

export default function Descarga() {
  const handleDescargar = () => {
    window.location.href = "https://pixeldrain.com/api/file/poRhhGUV?download"; // Reemplaza por tu URL real
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fef8f4] px-6 text-center">
      <Image src="/logo_muevete.png" alt="Logo Muévete" width={120} height={120} className="mb-6" />
      <h1 className="text-2xl font-bold text-gray-800">¿Quieres descargar la app <br /> Muévete Valparaíso?</h1>
      <p className="text-gray-600 mt-3">Presiona el botón para aceptar y comenzar la descarga.</p>
      <button
        onClick={handleDescargar}
        className="mt-6 px-8 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 shadow-md transition"
      >
        Aceptar y descargar
      </button>
    </main>
  );
}
