// import { Component, useEffect } from 'react';
import { ContactForm } from './contact-form/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { useState, useEffect } from 'react';

import style from './style.module.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    setContacts([...contacts, data]);
  };

  const changeFilterInput = event => {
    setFilter(event);
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  // const localUserContacts = JSON.parse(
  //   localStorage.getItem('localUserContacts')
  // );

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('localUserContacts'));
    if (storedTodos) {
      setContacts(storedTodos);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('localUserContacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  // console.log(localUserContacts);

  // console.log(contacts);
  // console.log(JSON.parse(localStorage.getItem('localUserContacts')));

  // componentDidMount() {
  // const fromLocalUserContacts = JSON.parse(
  //   localStorage.getItem('localUserContacts')
  // );
  // if (fromLocalUserContacts) {
  //   this.setState({ contacts: fromLocalUserContacts });
  // }
  // }

  // componentDidUpdate(prevState) {
  // if (this.state !== prevState) {
  //   localStorage.setItem(
  //     'localUserContacts',
  //     JSON.stringify(this.state.contacts)
  //   );
  // }
  // }

  return (
    <div
      style={{
        height: '100vh',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '150px',
        color: '#010101',
      }}
    >
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm
          formSubmitHandler={formSubmitHandler}
          contacts={contacts}
        />
        <Filter changeFilterInput={changeFilterInput} />
      </div>
      <h2 className={style.text}>Contacts</h2>
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDeleteContact={handleDeleteContact}
      />
      {/* <Input /> */}
    </div>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     const unicID = nanoid();

//     this.setState({
//       ...this.state,
//       contacts: [...this.state.contacts, { id: unicID, ...data }],
//     });
//   };

//   changeFilterInput = filter => {
//     this.setState({ ...this.state, filter });
//   };

//   handleDeleteContact = id => {
//     let deleteItem = this.state.contacts;
//     this.state.contacts.forEach((item, index) => {
//       if (item.id === id) {
//         deleteItem.splice(index, 1);
//       }
//     });
//     this.setState({ ...this.state, contacts: [...deleteItem] });
//   };

//   componentDidMount() {
//     const fromLocalUserContacts = JSON.parse(
//       localStorage.getItem('localUserContacts')
//     );
//     if (fromLocalUserContacts) {
//       this.setState({ contacts: fromLocalUserContacts });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state !== prevState) {
//       localStorage.setItem(
//         'localUserContacts',
//         JSON.stringify(this.state.contacts)
//       );
//     }
//     // console.log(this.state);
//     // console.log(prevState);
//   }

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           width: '400px',
//           display: 'flex',
//           flexDirection: 'column',
//           marginLeft: '150px',
//           color: '#010101',
//         }}
//       >
//         <div>
//           <h1 className={style.title}>Phonebook</h1>
//           <ContactForm
//             formSubmitHandler={this.formSubmitHandler}
//             contacts={this.state.contacts}
//           />
//           <Filter changeFilterInput={this.changeFilterInput} />
//         </div>
//         <h2 className={style.text}>Contacts</h2>
//         <ContactList
//           contacts={this.state.contacts}
//           filter={this.state.filter}
//           handleDeleteContact={this.handleDeleteContact}
//         />
//         {/* <Input /> */}
//       </div>
//     );
//   }
// }
