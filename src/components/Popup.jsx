import React from 'react';
import Button from './Button';
import './styles/Popup.css';

export default function Popup({
    title,
    bodyText,
    onCancel,
    onConfirm,
    children,
}) {
    return (
        <div className="container">
            <div className="popup">
                <h1 className="title secondary-text">{title}</h1>
                {bodyText && <h3 className="body-text">{bodyText}</h3>}
                {children}
                <div className="menu">
                    <Button
                        text="Cancel"
                        onClick={onCancel}
                        type="transparent"
                        styles={{
                            color: 'var(--text-color)',
                        }}
                    />
                    <Button
                        text="OK"
                        onClick={onConfirm}
                        type="accent"
                        styles={{
                            padding: '10px 16px',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
