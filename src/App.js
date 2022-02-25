import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/

const contacts = [
  {
      image: "https://images.squarespace-cdn.com/content/v1/5fe5437fa441367f7db96f4c/1610238388514-2NW7PY4BFRLYS7LE97C0/angela%2Bbassett%2Bheadshot.jpg",
      name: "Angela Bassett",
      phone: "1-800-123-4567",
      email: "angela.basset@bgm.com"
  },
  {
      image: "https://cdn2.kennedy-center.org/images/slideshow/H100903_OprahWinfrey_LG.jpg",
      name: "Oprah Winfrey",
      phone: "1-877-555-2345",
      email: "oprah.winfrey@bgm.com"

  },
  {
      image: "https://static.tvtropes.org/pmwiki/pub/images/screen_shot_2019_02_24_at_43145_pm.png",
      name: "Regina King",
      phone: "1-234-567-8901",
      email: "regina.king@bgm.com"
  },
  {
      image: "https://www.emmys.com/sites/default/files/Queen-Latifah-Bio-450x600.jpg",
      name: "Queen Latifah",
      phone: "1-888-518-3752",
      email: "queen.latifah@bgm.com"
  },
  {
      image: "https://cdn.britannica.com/54/191254-050-16ABF1FA/Taraji-P-Henson.jpg",
      name: "Taraji P. Henson",
      phone: "1-855-555-5555",
      email: "taraji.henson@bgm.com",
  },
  {
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/photo-oct-01-2-40-11-am-1612284884.jpg",
      name: "Issa Rae",
      phone: "1-253-987-6543",
      email: "issa.rae@bgm.com",
  },
  {
      image: "https://pbs.twimg.com/profile_images/1380196456716468227/GhNgVOV8_400x400.jpg",
      name: "Viola Davis",
      phone: "1-509-985-1423",
      email: "viola.davis@bgm.com",
  },
  {
      image: "https://cdns-images.dzcdn.net/images/artist/1b21ed99c44c82daa255d098af0f7d20/264x264.jpg",
      name: "Loretta Devine",
      phone: "1-360-542-8458",
      email: "loretta.devine@bgm.com",
  }
]


function App(props) {
  return (
    <div className="App">
      <Sidebar />
      <div className='Contactslist'>
        {contacts.map(contact => <Contactslist key={contact.name} image={contact.image} name={contact.name} phone={contact.phone} email={contact.email}/>)}
      </div>
    </div>
  );
}

export default App;
