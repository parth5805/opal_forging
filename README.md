# Gem Forging Script

This Node.js script simulates the forging process for upgrading gems from one rarity level to the next. The process involves summing the quadrants of input gems, applying a modulo operation to determine the new values for the next rarity level, and mapping these values to the corresponding next level rarity.

## Levels and Mappings

The rarity levels are as follows:

- **Common**: Upgraded to Rare
- **Rare**: Upgraded to Unique
- **Unique**: Upgraded to Epic
- **Epic**: Upgraded to Legendary
- **Legendary**: Upgraded to Mythic

Each level has specific mappings for the sum of quadrants modulo results. Special handling is applied for the `1111` sum of quadrants.

### Special Case: `1111`

When the sum of quadrants results in `1111`, it maps to a specific shape in the next level. This is due to the fact that `1111` technically should return a gem of the Unique level. To ensure users do not skip levels, the gem mapped from `1111` will be the last gem of the current level. For example, for Rare level, `1111` will map to `3332` instead of `3333`. 

## Prerequisites

- Node.js installed on your machine.

## How to Run

1. Clone this repository.
2. Navigate to the directory containing the script.
3. Run the script using Node.js:
   ```bash
   node forging.js
   ``` 

## Script Details

### Functionality

- **Prompting User for Input**: The script prompts the user to enter the current gem level and the details of each gem.
- **Calculating Sum and Modulo Results**: The script calculates the sum of the quadrants and applies modulo operations.
- **Determining Forged Result***: The script determines the resulting gem in the next rarity level based on the modulo results.

```bash
Enter gem level to upgrade (common, rare, unique, epic, legendary): common
You need 2 common gems.
Enter details for gem 1 (comma-separated, e.g., 1,1,1,2): 1,1,1,1
Enter details for gem 2 (comma-separated, e.g., 1,1,1,2): 1,1,1,1
Sum of quadrants: 2, 2, 2, 2
MOD results: 0, 0, 0, 0
Forged Result: Rare 2222
```

## Incentives

- **Special Handling for 1111**: When the sum of quadrants results in 1111, the gem maps to a specific shape in the next level, e.g., 3332 for Rare.
- **Forging Fees Reduction**: When users obtain a 1111 sum of quadrants, they receive a reduction in forging fees.

## Future Enhancements

- **Mythic Level Incentives**: Users who forge 7 Legendary gems into 1 Mythic gem may receive additional incentives.
- **New Gem Introduction**: Upon forging or minting a Mythic gem, new gems may be introduced, which can be mined or forged using Mythic gems.

## Demo

<img width="538" alt="image" src="https://github.com/user-attachments/assets/04f8d72a-cfb0-4e0f-bd73-3c598bd6ebe5">
<br>
<img width="595" alt="image" src="https://github.com/user-attachments/assets/82d6c692-1df9-46a2-81bb-77ac93d6312a">
<br>
<img width="585" alt="image" src="https://github.com/user-attachments/assets/c86906be-ee7b-48ab-8f79-259d33360e19">




