import { create } from 'zustand';
import { Organization, StudentGroup, User } from '@/Types/types';
import orgaizationData from '@/dummyData/organisationData.json'
import studentData from '@/dummyData/studentData.json'
import studentGroupData from '@/dummyData/studentGroupData.json'

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
     addInstructor: (orgId: number|string, instructor: User) => void
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
    organizations: orgaizationData,


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
    })),

    addInstructor: (orgId, instructor) => set((state)=>({
      organizations: state.organizations.map((org: Organization)=>(
        org.org_id === orgId ? { ...org, instructors: [...org.instructors || [], instructor] } : org
      ))
    }))

}))


type OrganizationAdminStore = {
  admins: User[];
  addAdmin: (newAdmin: User) => void;
  editAdmin: (id: number|string, updatedAdminData: Partial<User>) => void;
  removeAdmin: (id: number|string) => void;
};

export const useOrganizationAdminStore = create<OrganizationAdminStore>((set) => ({
  admins: [],

  addAdmin: (newAdmin: User) =>
    set((state) => ({
      admins: [...state.admins, newAdmin],
    })),

  editAdmin: (id: number | string, updatedAdminData) =>
    set((state) => ({
      admins: state.admins.map((admin: User) =>
        admin.user_id === id ? { ...admin, ...updatedAdminData } : admin
      ),
    })),

  removeAdmin: (id) =>
    set((state) => ({
      admins: state.admins.filter((admin) => admin.user_id !== id),
    }))
}));

type StudentStoreType ={
  students: User[];
  addStudent: (newStudent: User) => void;
  editStudent: (id: number|string, updatedStudentData: Partial<User>) => void;
  removeStudent: (id: number|string) => void;
}

export const useStudentStore = create<StudentStoreType>((set)=>({
  students: studentData,

  addStudent: (newStudent: User) =>
    set((state:StudentStoreType) => ({
      students: [...state.students, newStudent],
    })),

  // Edit an existing student
  editStudent: (id: number | string, updatedStudentData: Partial<User>) =>
    set((state:StudentStoreType) => ({
      students: state.students.map((student) =>
        student.user_id === id ? { ...student, ...updatedStudentData } : student
      ),
    })),

  // Remove a student by ID
  removeStudent: (id: number | string) =>
    set((state:StudentStoreType) => ({
      students: state.students.filter((student) => student.user_id !== id),
    })),
}))


type SudentGroupType = {
  groups : StudentGroup[];
  addStudent: (groupId: number|string, newStudent: User) => void;
  removeStudent: (groupId: number|string, studentId:number|string) => void;
  editStudent: (groupId: number|string, studentId: number|string, updatedStudentData: Partial<User>) => void;
}

export const useStudentGroupStore = create<SudentGroupType>((set)=>({
  groups: studentGroupData,

  //Add a student to a group
  addStudent: (groupId, newStudent) =>
    set((state) => ({
      groups: state.groups.map((group) =>
        group.group_id === groupId
          ? { ...group, students: [...group.students, newStudent] }
          : group
      ),
    })),

  // Remove a student from a specific group
  removeStudent: (groupId, studentId) =>
    set((state) => ({
      groups: state.groups.map((group) =>
        group.group_id === groupId
          ? {
              ...group,
              students: group.students.filter(
                (student) => student.user_id !== studentId
              ),
            }
          : group
      ),
    })),

    // Edit a student's details in a specific group
  editStudent: (groupId, studentId, updatedStudentData) =>
    set((state) => ({
      groups: state.groups.map((group) =>
        group.group_id === groupId
          ? {
              ...group,
              students: group.students.map((student) =>
                student.user_id === studentId
                  ? { ...student, ...updatedStudentData }
                  : student
              ),
            }
          : group
      ),
    })),
}));