import React from 'react';

export default function CForm({
    onUpdateState,
    cardCvv,
    children,
    callCodTarjeta
}) 
{
    const handleFormChange = (event) => {
        const { name, value } = event.target;

        onUpdateState(name, value);
        callCodTarjeta(value)
     
    };

    const onCvvFocus = (event) => {
        onUpdateState('isCardFlipped', true);
    };

    const onCvvBlur = (event) => {
        onUpdateState('isCardFlipped', false);
    };
    return (
        <div className="card-form">
            <div className="card-list">{children}</div>
            <div className="card-form__inner">
                <div className="card-form__row">
                    <div className="card-form__col -cvv">
                        <div className="card-input">
                            <label
                                htmlFor="cardCvv"
                                className="card-input__label"
                            >
                               Código de seguridad
                            </label>
                            <input
                                type="tel"
                                className="card-input__input"
                                maxLength="4"
                                autoComplete="off"
                                name="cardCvv"
                                onChange={handleFormChange}
                                onFocus={onCvvFocus}
                                onBlur={onCvvBlur}
                                ref={cardCvv}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
