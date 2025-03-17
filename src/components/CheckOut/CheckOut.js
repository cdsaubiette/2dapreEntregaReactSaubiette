import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from "react-hook-form";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../AddFirebase/config";
import { useNavigate, Link } from 'react-router-dom'; 
import Cart from '../cart/Cart';



    const CheckOut = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    const [enviando, setEnviando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");
    const navigate = useNavigate(); 
    const [procesando, setProcesando] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors, touchedFields }, 
        reset 
    } = useForm({
        mode: 'onTouched' 
    });
    
     const enviar = async (data) => {
        setEnviando(true);
        setProcesando(true);
        try {
            const orden = {
                cliente: data,
                items: cart,
                total: total,
                fecha: new Date().toLocaleString()
            }
            
            const ordenesRef = collection(db, "ordenes");
            const docRef = await addDoc(ordenesRef, orden);

            // Actualiza stock en Firestore
            for (const item of cart) {
                const itemRef = doc(db, "productos", item.id);
                const itemDoc = await getDoc(itemRef);
                if (itemDoc.exists()) {
                    const newStock = itemDoc.data().stock - item.quantity;
                    await updateDoc(itemRef, { stock: newStock });
                }
            }

            await new Promise(resolve => setTimeout(resolve, 500));
            
            setProcesando(false);
            setMensajeExito(`¡Gracias por su Compra!  SU CODIGO ES: ${docRef.id}`);
            setTimeout(() => {
            }, 1000);
            
        } catch (error) {
            console.error("Error al procesar la orden:", error);
        } finally {
            setEnviando(false);
        }
    };

    const handleVolverAComprar = () => {
      reset();
      clearCart();
      navigate('/');
  };

    if (!cart || cart.length === 0) {
      return (
          <div className="container">
              <h1>No hay items en el carrito</h1>
              <button onClick={() => navigate('/')}>VOLVER AL INICIO</button>
          </div>
      );
  }

  if (procesando) {
    return (
        <div className="container">
            <h1 className="procesando-mensaje">Su orden se está procesando...</h1>
        </div>
    );
  } 

  if (mensajeExito) {
    return (
        <div className="container">
            <div className="mensaje-exito">
              {mensajeExito}
            </div>

            <h2>Resumen de compra</h2>
                <div className='summary-items'>
                    {cart.map(item => (
                        <div key={item.id} className='summary-item'>
                            <span className='summary-item-name'>{item.nombre}</span>
                            <span>${item.precio * item.quantity}</span>
                        </div>
                    ))}
                </div>
                <div className='summary-total'>
                    <h3>Total: ${total}</h3>
                </div>

            <button onClick={handleVolverAComprar} className="OptionCart">
                SEGUIR COMPRANDO
            </button>
        </div>
    );
}

    return (
        <div className="container">
            <h1 className="main-title">FINALIZAR COMPRA</h1>
            <h2 className="main-title">Completa los siguientes datos</h2>
            
            
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
            <input 
              type="text" 
              placeholder="Ingresá tu nombre" 
              {...register("nombre", { 
                required: "El nombre es obligatorio",
                minLength: { value: 2, message: "Mínimo 2 caracteres" }
              })} 
            />
            {touchedFields.nombre && errors.nombre && 
              <span className="error">{errors.nombre.message}</span>
            }

<input 
              type="tel" 
              placeholder="Ingresá tu teléfono" 
              {...register("telefono", { 
                required: "El teléfono es obligatorio",
                pattern: { 
                  value: /^[0-9]{10}$/,
                  message: "Teléfono inválido (10 dígitos)"
                }
              })} 
            />
            {touchedFields.telefono && errors.telefono && 
              <span className="error">{errors.telefono.message}</span>
            }
    
            <input 
              type="email" 
              placeholder="Ingresa tu e-mail" 
              {...register("email", { 
                required: "El email es obligatorio",
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })} 
            />
            {touchedFields.email && errors.email && 
              <span className="error">{errors.email.message}</span>
            }

    
            

            <button className="enviar" type="submit" disabled={enviando}>
                    {enviando ? "Enviando..." : "Enviar orden"}
            </button>

          

          </form>

          {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}

          </div>
    )
};


export default CheckOut;