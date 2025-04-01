export class UserStatusStore {
    private static instance: UserStatusStore
    private userStatuses: Record<string, boolean>

    private constructor() {
        this.userStatuses = {}
    }

    public static getInstance(): UserStatusStore {
        if (!UserStatusStore.instance) {
            UserStatusStore.instance = new UserStatusStore()
        }
        return UserStatusStore.instance
    }

    setUserOnline(userId: string) {
        this.userStatuses[userId] = true
    }

    setUserOffline(userId: string) {
        this.userStatuses[userId] = false
    }

    isUserOnline(userId: string) {
        return !!this.userStatuses[userId]
    }
}

/*
Example of userStatuses object:

private userStatuses: Record<string, boolean> = {
  "user123": true,     // User is online
  "user456": false,    // User is offline (explicitly set)
  "user789" is not in the object at all
}

How the function would work with these values:
isUserOnline("user123");  // Returns true (user is online)
isUserOnline("user456");  // Returns false (user is explicitly offline)
isUserOnline("user789");  // Returns false (user not in the object)

The third case is why the !! operator is useful. When you try to access
userStatuses["user789"], you get undefined. The double negation converts this to false:

*/
