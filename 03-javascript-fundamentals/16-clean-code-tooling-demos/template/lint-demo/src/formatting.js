export function formatEmployeeName(employee){return `${employee.firstName} ${employee.lastName}`}

    export function formatEmployeeSummary( employee ){
  const status = employee.isActive?"Active":"Inactive";
   return `${formatEmployeeName(employee)} - ${employee.department} - ${status}`;
}
