export async function createArchive({
    files
  }: {
    files: File[];
  }) {
    try {
      const response = await fetch (
        `https://createarchives.com/`,
        {
          method: "POST",
          body:`${files}`,
        },

      );
      return response.json();
    } catch (error) {
      throw new Error("Ошибка" + error);
    }
  }