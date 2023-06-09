const reservationValidate = (
  name,
  phone,
  age,
  headCount,
  classRequest,
  reservationCheck,
) => {
  let errorMessage = '';
  // let successMessage = '예약이 완료되었습니다.';

  //! 이름 = 영문, 한문으로 2자 이상만 가능
  const nameRegex = /^[가-힣a-zA-Z]{2,}$/;
  const isNameValid = nameRegex.test(name);

  //! 폰번호 =  11~14자 사이의 숫자만 가능
  const phoneRegex = /^\d{11,14}$/;
  const isPhoneValid = phoneRegex.test(phone);

  //! 나이 =  10자 이하의 숫자만 가능
  const ageRegex = /^\d{1,3}$/;
  const isAgeValid = ageRegex.test(age);

  // ! 인원수 =  1이상의 숫자만 가능
  const headCountRegex = /^(?:[1-9]|10)$/;
  const isHeadCountValid = headCountRegex.test(headCount);

  //! 요청사항  = 30자 이하만 가능
  const classRequestRegex = /^.{0,30}$/;
  const isClassRequestValid = classRequestRegex.test(classRequest);

  //! 예약신청 확인 true만 가능
  const isReservationCheckValid = reservationCheck;

  if (!isNameValid) {
    errorMessage = '이름이 올바르지 않습니다. 올바른 이름을 입력해주세요.';
    return { errorData: 'name', errorMessage };
  }

  if (!isPhoneValid) {
    errorMessage =
      '전화번호가 올바르지 않습니다. 올바른 전화번호를 입력해주세요.';
    return { errorData: 'phone', errorMessage };
  }

  if (!isAgeValid) {
    errorMessage =
      '체험자 나이가 올바르지 않습니다. 올바른 체험자 나이를 입력해주세요.';
    return { errorData: 'age', errorMessage };
  }

  if (!isHeadCountValid) {
    errorMessage = '최대 인원수를 확인해주세요.';
    return { errorData: 'headCount', errorMessage };
  }

  if (!isClassRequestValid) {
    errorMessage = '요청사항은 최대 30자 이내로 입력해주세요.';
    return { errorData: 'classRequest', errorMessage };
  }

  if (!isReservationCheckValid) {
    errorMessage = '예약을 완료하시려면 체크 박스에 체크해주세요.';
    return { errorData: 'reservationCheck', errorMessage };
  }
};

export default reservationValidate;
