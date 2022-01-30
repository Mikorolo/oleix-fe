import { useCurrentUser } from "../contexts/UserContext";
import { RolesEnum } from "../enums/RolesEnum";

const useRole = () => {
    const { currentUser } = useCurrentUser();
    const roleId = currentUser?.roleId

    const hasRole = (...roles: RolesEnum[]) => roles.includes(roleId as RolesEnum);

    return hasRole;
}

export default useRole;