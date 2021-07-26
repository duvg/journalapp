import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/note';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { startDeleting } from '../../actions/note';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        
        if(note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        
        dispatch( activeNote(formValues.id, { ...formValues }) );

    }, [formValues, dispatch]);


    const handleDelete = () => {
        
        dispatch( startDeleting( id ) );
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                
                    <input
                        autoComplete="off"
                        name="title"
                        placeholder="Some awesome title XD"
                        className="notes__title-input"
                        type="text"
                        value={ title }
                        onChange={ handleInputChange }
                    />

                    <textarea
                        className="notes__textarea"
                        name="body"
                        placeholder="Whats happened today"
                        value={ body }
                        onChange={ handleInputChange }
                    ></textarea>

                    {
                        (note.url) 
                        && (
                            <div className="notes__image">
                                <img
                                    src={note.url}
                                    alt="img"
                                />
                            </div>
                        )
                    }
                
            </div>

            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}
