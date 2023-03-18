import { useState } from 'react';
import { nanoid } from 'nanoid';

import style from '../style.module.css';

export function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setId(nanoid());

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onHandleAddBtn = () => {
    let chackName = false;

    props.contacts.forEach(contact => {
      if (contact.name === name) {
        chackName = true;
      }
    });

    if (chackName) {
      alert(`${name} is olready in contacts`);
    } else {
      props.formSubmitHandler({ id, name, number });
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={style.wrapper}>
      <form action="" className={style.form}>
        <label htmlFor="name" className={style.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={style.forminput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" className={style.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          className={style.forminput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          type="button"
          name="addButton"
          onClick={onHandleAddBtn}
          className={style.button}
        >
          Add contact
        </button>
      </form>
    </div>
  );
}
