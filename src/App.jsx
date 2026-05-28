import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [mensaje, setMensaje] = useState('Conectando con Supabase...')

  useEffect(() => {
    async function probarConexion() {
      // Intentamos leer la tabla 'notas'
      const { data, error } = await supabase.from('notas').select()
      
      if (error) {
        // Si hay error, nos dirá por qué (llaves mal puestas, tabla no existe, etc.)
        setMensaje('Error de conexión: ' + error.message)
      } else {
        // Si data existe, es que la conexión fue un éxito
        setMensaje('¡CONEXIÓN EXITOSA! Ya puedes leer datos.')
        console.log('Datos recibidos:', data)
      }
    }
    probarConexion()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="p-10 bg-gray-800 rounded-3xl shadow-2xl border-2 border-green-500 text-center">
        <h1 className="text-3xl font-bold mb-6 text-green-400">Estado de la Base de Datos</h1>
        <div className="text-xl font-mono bg-black p-6 rounded-xl border border-gray-700">
          {mensaje}
        </div>
        <p className="mt-6 text-gray-500 italic">
          Si sale error de "relation notas does not exist", recuerda crear la tabla en Supabase.
        </p>
      </div>
    </div>
  )
}

export default App