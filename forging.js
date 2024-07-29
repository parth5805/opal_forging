const readline = require('readline');

const levelMapping = {
    common: {
      '0000': '1111', '0001': '1112', '0010': '1121', '0011': '1122',
      '0100': '1211', '0101': '1212', '0110': '1221', '0111': '1222',
      '1000': '2111', '1001': '2112', '1010': '2121', '1011': '2122',
      '1100': '2211', '1101': '2212', '1110': '2221', '1111':'2221'
    },
    rare: {
      '0000': '2222', '0001': '2223', '0010': '2232', '0011': '2233',
      '0100': '2322', '0101': '2323', '0110': '2332', '0111': '2333',
      '1000': '3222', '1001': '3223', '1010': '3232', '1011': '3233',
      '1100': '3322', '1101': '3323', '1110': '3332','1111':'3332'
    },
    unique: {
      '0000': '3333', '0001': '3334', '0010': '3343', '0011': '3344',
      '0100': '3433', '0101': '3434', '0110': '3443', '0111': '3444',
      '1000': '4333', '1001': '4334', '1010': '4343', '1011': '4344',
      '1100': '4433', '1101': '4434', '1110': '4443','1111':'4443'
    },
    epic: {
      '0000': '4444', '0001': '4445', '0010': '4454', '0011': '4455',
      '0100': '4544', '0101': '4545', '0110': '4554', '0111': '4555',
      '1000': '5444', '1001': '5445', '1010': '5454', '1011': '5455',
      '1100': '5544', '1101': '5545', '1110': '5554', '1111':'5554'
    },
    legendary: {
      '0000': '5555', '0001': '5556', '0010': '5565', '0011': '5566',
      '0100': '5655', '0101': '5656', '0110': '5665', '0111': '5666',
      '1000': '6555', '1001': '6556', '1010': '6565', '1011': '6566',
      '1100': '6655', '1101': '6656', '1110': '6665', '1111':'6665'
    },
    mythic: {
      '0000': '6666'
    }
  };


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (question) => new Promise(resolve => rl.question(question, resolve));

const getSumAndModResults = (quadrants) => {
  const sum = quadrants.reduce((acc, gem) => {
    gem.split(',').forEach((value, index) => {
      acc[index] = (acc[index] || 0) + parseInt(value, 10);
    });
    return acc;
  }, []);

  const modResults = sum.map(value => value % 2);
  return { sum, modResults };
};

const getForgedResult = (level, modResults) => {
  const nextLevel = {
    common: 'rare',
    rare: 'unique',
    unique: 'epic',
    epic: 'legendary',
    legendary: 'mythic'
  }[level];


 // Convert modResults to a string without extra padding
 const modString = modResults.map(num => num.toString()).join('');

 // Trim to exactly 4 characters if necessary
 const formattedModString = modString.padStart(4, '0').slice(-4);
 const forgedResult = levelMapping[nextLevel][formattedModString];

  
  
  if (!forgedResult) {
    return `Invalid MOD results`;
  }

  return `${nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1)} ${forgedResult.split('').join(',')}`;
};

const main = async () => {
  const level = (await prompt('Enter gem level to upgrade (common, rare, unique, epic, legendary): ')).toLowerCase();
  const gemCount = {
    common: 2,
    rare: 3,
    unique: 4,
    epic: 5,
    legendary: 6
  }[level];
  
  if (!gemCount) {
    console.log('Invalid gem level.');
    rl.close();
    return;
  }

  console.log(`You need ${gemCount} ${level} gems.`);
  
  const gems = [];
  for (let i = 0; i < gemCount; i++) {
    const gemDetails = await prompt(`Enter details for gem ${i + 1} (comma-separated, e.g., 1,1,1,2): `);
    gems.push(gemDetails);
  }

  const { sum, modResults } = getSumAndModResults(gems);
  console.log(`Sum of quadrants: ${sum.join(', ')}`);
  console.log(`MOD results: ${modResults.join(', ')}`);
  
  const forgedResult = getForgedResult(level, modResults);
  console.log(`Forged Result: ${forgedResult}`);
  
  rl.close();
};

main();
