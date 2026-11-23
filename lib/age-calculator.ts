
export function calculateBabyAge(birthDate: string, currentDate = new Date()) {
  const [year, month, day] = birthDate.split("-").map(Number);

  const birth = new Date(year, month - 1, day);
  const today = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  if (
    Number.isNaN(birth.getTime()) ||
    birth.getFullYear() !== year ||
    birth.getMonth() !== month - 1 ||
    birth.getDate() !== day ||
    birth > today
  ) {
    return null;
  }

  const totalDays = Math.round(
    (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
      Date.UTC(year, month - 1, day)) /
      86400000
  );

  let years = today.getFullYear() - year;
  let months = today.getMonth() - (month - 1);
  let days = today.getDate() - day;

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    days,
    totalDays,
    weeks: Math.floor(totalDays / 7),
    remainingDays: totalDays % 7,
  };
}
