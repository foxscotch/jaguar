declare global {
  namespace App {
    interface Locals {
      session: Session | null;
      currentUser: User | null;
    }
  }
}

export {};
