//import {useState, useEffect} from 'react';
import {create} from '../services/data';


const CreateGame
 = ({history}) => {

  
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [maxLevel, setMaxLevel] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [summary, setSummary] = useState("");

  // const onTitleChange = (e) => setTitle(e.target.value);
  // const onCategoryChange = (e) => setCategory(e.target.value);
  // const onMaxLevelChange = (e) => setMaxLevel(e.target.value);
  // const onImageUrlChange = (e) => setImageUrl(e.target.value);
  // const onSummaryChange = (e) => setSummary(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    //const data = { title, category, maxLevel, imageUrl, summary };
    let title = e.target.title.value;
    let category = e.target.category.value;
    let maxLevel = e.target.maxLevel.value;
    let imageUrl = e.target.imageUrl.value;
    let summary = e.target.summary.value;
    
    const data = { title, category, maxLevel, imageUrl, summary };
    
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // };
    
    
    create(data)
    .then(history.push('/games'))
      //.then(res => res.redirect('/games'));
  };

    return (
        <section id="create-page" class="auth">
          <form id="create" onSubmit={handleSubmit}>
            <div class="container">

              <h1>Create Game</h1>
              <label for="leg-title">Legendary title:</label>
              <input type="text" id="title" name="title" placeholder="Enter game title..." />

              <label for="category">Category:</label>
              <input type="text" id="category" name="category" placeholder="Enter game category..." />

              <label for="levels">MaxLevel:</label>
              <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

              <label for="game-img">Image:</label>
              <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

              <label for="summary">Summary:</label>
              <textarea name="summary" id="summary" ></textarea>
              <input class="btn submit" type="submit" value="Create Game" />
            </div>
          </form>
        </section>
    );
};

export default CreateGame
;