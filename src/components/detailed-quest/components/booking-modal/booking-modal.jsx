import { useRef } from 'react';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { validatePhoneNumber } from 'utils';
import { uploadOrder } from 'store/api-actions';

const BookingModal = ({ handleModalCloseBtn }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const countRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleInputChange = (evt) => {
    if (evt.target === phoneRef.current) {
      phoneRef.current.setCustomValidity(validatePhoneNumber(phoneRef.current.value));
      phoneRef.current.reportValidity();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const order = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      peopleCount: parseInt(countRef.current.value),
      isLegal: !!(checkboxRef.current.value),
    }

    if (nameRef.current && phoneRef.current && countRef.current && checkboxRef.current) {
      uploadOrder(order);
    }

    handleModalCloseBtn(false);
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => handleModalCloseBtn(false)}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={countRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={checkboxRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default BookingModal;
