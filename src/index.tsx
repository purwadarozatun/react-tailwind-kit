import * as React from 'react'
import styles from './styles.module.css'
import { useForm } from "react-hook-form";

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  const [count, setCount] = React.useState(0);
  return <div className={styles.test}>Example Component: {text} {count}
    <button onClick={() =>  {
      setCount(count +1)
    }}>CLICK</button>
  </div>
}

export const ReactTable = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}
