import User from "../schema/user.schema.js"

// Insert a User
export async function createUser(input) {
  try {
    const result = await User.create(input)
    return result;
  } catch (error) {
      throw e;
  }
}