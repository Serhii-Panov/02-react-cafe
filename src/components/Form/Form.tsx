export default function Form() {
      const handleSubmit = (formData: FormData) => {
        console.log("form submitted");
        console.log(formData.get("username"));
  };
    return (
        <form action = {handleSubmit}>
            <input type = "text" name = "username" defaultValue="Jimbo"/>
            <button type = "submit">Submit</button>
        </form>
    )
}