import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                
                    <input
                        type="text"
                        placeholder="Some awesome title XD"
                        className="notes__title-input"
                        autoComplete="off"
                    />

                    <textarea
                        placeholder="Whats happened today"
                        className="notes__textarea"
                    ></textarea>

                    <div className="notes__image">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888__340.jpg"
                            alt="img"
                        />
                    </div>
                
            </div>

        </div>
    )
}
