import { LoadingQuote, Quote } from "./";
import { useCounter, useFetch } from "../hooks";


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { quote, author } = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading
                ? <LoadingQuote/>
                : <Quote author={author} quote={quote}/>

        }

        <button 
            className="btn btn-primary"
            onClick={ () => increment() }
            disabled={ isLoading }
        >
            Next quote
        </button>

    </>
  )
}
