import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../AddFirebase/config";
import { useState } from "react";

const Contacto = () => {
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");

  const { 
    register, 
    handleSubmit, 
    formState: { errors, touchedFields }, 
    watch,
    reset 
  } = useForm({
    mode: 'onTouched' 
  });

  const enviar = async (data) => {
    setEnviando(true);
    try {
      const contactosRef = collection(db, "contactos");
      await addDoc(contactosRef, {
        ...data,
        fecha: new Date().toLocaleString()
      });
      
      setMensajeExito("Gracias por ponerte en contacto con nosotros. Te responderemos a la brevedad.");
      reset(); // Limpia el formulario
      
      setTimeout(() => {
        setMensajeExito("");
      }, 3000);
      
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
      
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

        <input 
          type="email" 
          placeholder="Confirma tu e-mail" 
          {...register("confirmEmail", { 
            required: "El email de confirmación es obligatorio",
            pattern: { 
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido"
            },
            validate: (value) => 
              value === watch("email") || "Los correos electrónicos no coinciden"
          })} 
        />
        {touchedFields.confirmEmail && errors.confirmEmail && 
          <span className="error">{errors.confirmEmail.message}</span>
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

        <textarea 
            placeholder="Observaciones o comentarios" 
            {...register("observaciones", { 
                maxLength: { 
                    value: 500, 
                    message: "El mensaje no puede superar los 500 caracteres" 
                }
            })} 
            rows="4"
        />
        {touchedFields.observaciones && errors.observaciones && 
            <span className="error">{errors.observaciones.message}</span>
        }

        <button className="enviar" type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};
export default Contacto;