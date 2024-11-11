export default function Instrctions({recipieArray,isLoading}){
    return(
        <div>
            <h2>Instructions</h2>
            {isLoading? <p>Loading</p>:recipieArray.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>))}
        </div>
    )
}