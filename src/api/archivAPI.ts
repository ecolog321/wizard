

export async function createArchive({
    files,
    access
  }: {
    files: File[];
    access:string,
  }) {
    try {
      const response = await fetch (
        `https://createarchives.com/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access}`,
          },
          body:`${files}`,
        },

      );
      return response.json();
    } catch (error) {
      throw new Error("Ошибка" + error);
    }
  }