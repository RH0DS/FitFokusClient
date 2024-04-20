
import { useForm } from "react-hook-form";
import "./ReportForm.css"
import { useState } from "react";


const ReportForm = () => {
    const { register, handleSubmit , formState: { errors }} = useForm();
    const [data, setData] = useState("");
  
    
    return (
    <> 
        {/* <form className="formet">
            <label>Dagens vikt:
                <input name="currentWeight"/>
            </label>
            <label>Dagens midjemått: 
                <input name="currentWaist"/>
            </label>
        </form>
     */}


        <form  className="formet" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            
            <h1>Fyll i din dagsvikt och mått</h1>
            <label className="inputField">
                <div className="rowTitle">   
                    Dagens Vikt:
                </div>    
                <input type="number" {...register("currentWeight", { required: true,min: 60, max: 200 })}   aria-invalid={errors.currentWeight ? "true" : "false"}placeholder="Fyll i dagens vikt här" />
                {errors.currentWeight?.type === "required" && (
                <div role="alert">Du måste fylla i en vikt tjockis</div>
      )}
            </label>
            <label className="inputField">
                <div className="rowTitle">
                    Midjemått:
                </div> 
                <input type="number" {...register("currentWaist", {required: "Du måste fylla i ett midjemått, hämta ett till måttband",min: 60, max: 150 })}    aria-invalid={errors.currentWaist ? "true" : "false"} placeholder="Dagens midjemått" />
                {errors.currentWaist && <div role="alert">{errors.currentWaist.message}</div>}
            </label>
            <label className="inputField">
                <div className="rowTitle">
                    Humör:
                </div>  
                <select {...register("mood", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Bra</option>
                    <option value="B">Dåligt</option>
                    <option value="B">Jacob</option>
                </select>
            </label>

            <p>{data}</p> 
            <input type="submit" />
        </form>

    </>);


}

export default ReportForm