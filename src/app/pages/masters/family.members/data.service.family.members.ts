import {
    DataNotUniqueError,
    DataNotFoundError,
} from '@app/errors';

import {
    DataService,
    RootModel,
    FamilyMemberModel,
} from '@app/services';

export class DataServiceFamilyMembers {
    public static async getAll(
    ): Promise<FamilyMemberModel[]> {
        const root: RootModel = await DataService.getRoot();
        return root.familyMembers ?? [];
    }

    public static async getById(
        familyMemberId: string
    ): Promise<FamilyMemberModel> {
        const familyMembers: FamilyMemberModel[] = await this.getAll();
        const [familyMember]: FamilyMemberModel[] = familyMembers.filter((value) => value.id === familyMemberId);
        
        return familyMember;
    }

    public static async create(
        familyMember: FamilyMemberModel
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.familyMembers = root.familyMembers ?? [];

        const familyMembers: FamilyMemberModel[] = root.familyMembers.filter((value) =>
            value.name.first === familyMember.name.first &&
            value.name.middle === familyMember.name.middle &&
            value.name.last === familyMember.name.last
        );
        if (familyMembers.length > 0) {
            throw new DataNotUniqueError();
        }

        root.familyMembers.push(familyMember);

        await DataService.saveRoot(root);
    }

    public static async update(
        familyMemberId: string,
        familyMember: FamilyMemberModel
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.familyMembers = root.familyMembers ?? [];

        const index: number = root.familyMembers.findIndex((value) => value.id === familyMemberId);
        if (index === -1) {
            throw new DataNotFoundError();
        }

        const familyMembers: FamilyMemberModel[] = root.familyMembers.filter((value) =>
            value.id !== familyMemberId &&
            value.name.first === familyMember.name.first &&
            value.name.middle === familyMember.name.middle &&
            value.name.last === familyMember.name.last
        );
        if (familyMembers.length > 0) {
            throw new DataNotUniqueError();
        }
        
        root.familyMembers[index] = familyMember;

        await DataService.saveRoot(root);
    }

    public static async delete(
        familyMemberId: string
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.familyMembers = root.familyMembers ?? [];

        const index: number = root.familyMembers.findIndex((value) => value.id === familyMemberId);
        if (index === -1) {
            throw new DataNotFoundError();
        }
        
        root.familyMembers.splice(index, 1);

        await DataService.saveRoot(root);
    }
}