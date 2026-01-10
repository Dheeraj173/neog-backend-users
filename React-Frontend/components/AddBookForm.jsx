import React, {useState} from "react";

const AddBookForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author:"",
        publishedYear:"",
        genre:"",
        language:"",
        country:"",
        rating:"", 
        summary:"",
        coverImageUrl:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,[name]:name==="publishedYear" || name==="rating"?parseInt(value):value,
        }));
    };

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const response = await fetch("https://neog-backend-users.vercel.app/books",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            if(!response.ok) {
                throw "Failed to add new Book in database."
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Add new Book</h2>
            <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <br />
            <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Author: </label>
            <br />
            <input 
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Published Year: </label>
            <br />
            <input 
            type="text"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Genre: </label>
            <br />
            <input 
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Language: </label>
            <br />
            <input 
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Country: </label>
            <br />
            <input 
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Rating: </label>
            <br />
            <input 
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Summary: </label>
            <br />
            <input 
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Cover Image Url: </label>
            <br />
            <input 
            type="text"
            name="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBookForm;