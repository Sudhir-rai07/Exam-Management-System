import Organisation from '@/components/pages/Organisation';
import { Organization, User } from '@/Types/types';
import { create } from 'zustand';

type Usertore = {
  user: User ; // Initialize as null to indicate no user is signed in initially
  signUp: (user: User) => void;
  updateProfile: (userId: number | string, updatedUser: User) => void;
};

type OrganizationStore = {
      organizations: Organization[];
     addOrganization : (newOrganosation: Organization) => void;
     updateOrganization: (orgId: number|string , updatedOrg: Organization) => void;
     deleteOrganization: (orgId: number | string) => void;
}

const userData:User = {
  user_id: 1,
    username: "Noman",
    email: "noman@Domain.com",
    password: "string",
    role: "systemAdmin"
}

export const useUser = create<Usertore>((set) => ({
  user: userData, // Initial state as null for no user
  signUp: (user: User) => set(() => ({ user })), // Set the user directly
  updateProfile: (userId: number | string, updatedUser: User) =>
    set((state) => {
      // Check if the current user matches the userId before updating
      if (state.user && state.user.user_id === userId) {
        return { user: { ...state.user, ...updatedUser } };
      }
      return state; 
    }),
}));


export const useOrganizationStore = create<OrganizationStore>((set)=>({
    organizations: [],


    addOrganization: (newOrganization) => set((state)=>({
      organizations: [...state.organizations, newOrganization],
    })),

    updateOrganization: (orgId, updatedOrg) =>
      set((state) => ({
        organizations: state.organizations.map((org) =>
          org.org_id === orgId ? { ...org, ...updatedOrg } : org
        ),
      })),

    deleteOrganization: (orgId) => set((state)=> ({
          organizations: state.organizations.filter((org)=> org.org_id !== orgId)
    }))

}))