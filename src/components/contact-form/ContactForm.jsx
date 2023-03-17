import { Component } from 'react';

import style from '../style.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onHandleAddBtn = () => {
    let chackName = false;

    this.props.contacts.forEach(contact => {
      if (contact.name === this.state.name) {
        chackName = true;
      }
    });
    if (chackName) {
      alert(`${this.state.name} is olready in contacts`);
    } else {
      this.props.formSubmitHandler(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={style.wrapper}>
        <form action="" className={style.form}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            onChange={this.handleInputChange}
            className={style.forminput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button
            type="button"
            name="addButton"
            onClick={this.onHandleAddBtn}
            className={style.button}
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
