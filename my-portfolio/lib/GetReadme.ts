export async function GetReadme(): Promise<string> {
   const response = await fetch(
      'https://raw.githubusercontent.com/eric97278/eric97278/main/README.md'
   );

   if (!response.ok) {
      throw new Error('Failed to fetch README');
   }

   const text = await response.text();
   return text;
}
