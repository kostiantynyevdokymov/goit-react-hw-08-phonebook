import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';
import contactsOperation from 'redux/contacts/contacts-operation';
import { useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  const isLoad = useSelector(state => state.contacts.isLoad);

  return (
    <ButtonDeleteStyle
      type="button"
      disabled={isLoad}
      onClick={() => dispatch(contactsOperation.deleteContact(id))}
    >
      <AiFillDelete />
    </ButtonDeleteStyle>
  );
};

export default ButtonDelete;

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
