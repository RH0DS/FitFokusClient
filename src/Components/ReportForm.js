
import { useForm } from "react-hook-form";
import "./ReportForm.css"
import { useState } from "react";


const ReportForm = () => {
    const  { register, handleSubmit , formState: { errors }} = useForm();
    const [data, setData] = useState("");

   
/* 
    Touched = om användaren har "rört" fältet
    Dirty = om det har kommit nya värden in i fältet

    useForm renderar inte om efter varje inmatning = bra performance
*/
  const onSubmit= (data)=>{
    
    setData(JSON.stringify(data))


    console.log(JSON.stringify(data))
    console.log(data)
  }
    
    return (
    <> 

        <form  className="formet" onSubmit={handleSubmit((data) => onSubmit(data))}>
            
            <h1>Fyll i din dagsvikt och mått</h1>

            <label className="inputField">
                <div className="rowTitle">   
                    Dagens Vikt:
                </div>    
                <input 
                    type="number" 
                    id="currentWeight"
                    placeholder="Fyll i dagens vikt här"
                
                    {...register("currentWeight", 
                        // { required: 
                        //     true,
                        //     min: 60,
                        //     max: 200 
                        // })} 
                        {
                            validate: {
                                requiredValues: (inputValue) => {
                                    switch(true) {
                                        case !inputValue:
                                            return "Du måste fylla i en vikt din tjockis!";
                                        case inputValue <= 60:
                                            return "Men troligt... lägg till några kilo mer";
                                        case inputValue >= 250:
                                            return "Så du har ett eget gravitationsfält?.. must be nice";
                                        default:
                                            return "";
                                    }
                                }
                            }
                        }
                    )}
                />

            </label>

            {/* { 
                errors.currentWeight && (
                <div  className="error" role="alert">Du måste fylla i en vikt din tjockis!</div>)
            } */}
            {
                errors.currentWeight && 
                <div  className="error" role="alert">{errors.currentWeight?.message}</div>
            }

            <label className="inputField">
                <div className="rowTitle">
                    Midjemått:
                </div> 
                <input 
                type="number" 
                id="currentWaist"
                placeholder="Dagens midjemått"

                // {...register("currentWaist", 
                //     {  required: "Du måste fylla i ett midjemått, hämta ett till måttband om du behöver...",
                //         min: 60,
                //         max: 195 
                //     }
                // )}
                {...register("currentWaist", 
                    {  
                        validate:{
                        requiredValues:(inputValue) =>{
                            
                            switch(true) {
                                case !inputValue:
                                    return "Du måste fylla i ett midjemått, hämta ett till måttband om du behöver...";
                                case inputValue <= 50:
                                    return "Midjan för en 2åring är 50cm... kanske ska du mäta en gång till?";
                                case inputValue >= 200:
                                    return "Grattis! Du har uppnått en ny form nu när du är rundare än du är lång, du är en boll!";
                                default:
                                    return "";
                                }
                            }

                        }   
                    }
                )}
                        
                />
            </label>
                {
                    errors.currentWaist && 
                    <div  className="error" role="alert">{errors.currentWaist?.message}</div>
                }

            <label className="inputField">
                <div className="rowTitle">
                    Humör:
                </div>  
                <select {...register("mood", { required: true })}>
                    <option value="">Select...</option>
                    <option value="Bra">Bra</option>
                    <option value="Dåligt">Dåligt</option>
                    <option value="Karatefylla">Karatefylla</option>
                    <option value="Jacob">Jacob</option>
                </select>
            </label>

            <p>{data}</p> 
            <input type="submit" />
        </form>

    </>);


}

export default ReportForm