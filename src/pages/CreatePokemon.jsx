import React, { forwardRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { PokemonsContext } from "../context/pokemonsContext";

const SelectTypeOne = forwardRef(
  ({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="plant">plant</option>
        <option value="fruit">fruit</option>
      </select>
    </>
  )
);

const SelectTypeTwo = forwardRef(
  ({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="">Select a type</option>
        <option value="butterfly">Butterfly</option>
        <option value="veggies">Veggies</option>
      </select>
    </>
  )
);

export default function CreatePokemon() {
  const { addPokemon } = useContext(PokemonsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addPokemon(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input
          placeholder="identify the pokemon"
          type="number"
          defaultValue=""
          className="input-create"
          {...register("id", { required: true, pattern: /^[0-9]+/ })}
          aria-invalid={errors.id ? "true" : "false"}
        />
      </p>
      {errors.id?.type === "required" && (
        <small role="alert">id is required</small>
      )}
      <p>
        <input
          placeholder="pokemon name"
          type="text"
          className="input-create"
          {...register("name", { required: true, minLength: 3 })}
          aria-invalid={errors.name ? "true" : "false"}
        />
      </p>
      {errors.name?.type === "required" && (
        <small role="alert">name is required</small>
      )}
      {errors.name && errors.name.type !== "required" && (
        <small role="alert">name should be at least 3 characters long</small>
      )}
      <p>
        <input
          placeholder="paste a url image"
          type="text"
          className="input-create"
          {...register("image", { required: true })}
          aria-invalid={errors.image ? "true" : "false"}
        />
      </p>
      {errors.image?.type === "required" && (
        <small role="alert">image is required</small>
      )}

      <section className="select">
        <SelectTypeOne
          label="typeOne"
          {...register("typeOne", { required: true })}
        />
        <SelectTypeTwo label="typeTwo" {...register("typeTwo")} />
      </section>


      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit">Create</button>
    </form>
  );
}
