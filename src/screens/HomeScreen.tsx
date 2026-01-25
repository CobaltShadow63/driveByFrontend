import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }: any) => {
  const stats = {
    wins: 12,
    totalRaces: 23,
    earnings: 450,
    activeRaces: 2,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome Back!</Text>
          <Text style={styles.subGreeting}>Ready to race?</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.wins}</Text>
            <Text style={styles.statLabel}>Wins</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.totalRaces}</Text>
            <Text style={styles.statLabel}>Total Races</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>${stats.earnings}</Text>
            <Text style={styles.statLabel}>Earnings</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.activeRaces}</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsSection}>
          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={() => navigation.navigate('RaceRequest')}
          >
            <Text style={styles.primaryButtonText}>Request a Race</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={() => navigation.navigate('ActiveRaces')}
          >
            <Text style={styles.secondaryButtonText}>
              Find a Race ({stats.activeRaces})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Races Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Races</Text>
          
          <View style={styles.raceCard}>
            <View style={styles.raceInfo}>
              <Text style={styles.raceTitle}>Downtown to Airport</Text>
              <Text style={styles.raceDistance}>8.2 km • 22 min</Text>
            </View>
            <View style={styles.raceResult}>
              <Text style={styles.won}>Won</Text>
              <Text style={styles.winnings}>+$50</Text>
            </View>
          </View>

          <View style={styles.raceCard}>
            <View style={styles.raceInfo}>
              <Text style={styles.raceTitle}>Harbor Bridge Route</Text>
              <Text style={styles.raceDistance}>12.5 km • 35 min</Text>
            </View>
            <View style={styles.raceResult}>
              <Text style={styles.lost}>Lost</Text>
              <Text style={styles.lost}>-$30</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    marginTop: 24,
    marginBottom: 32,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  subGreeting: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ff6b35',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
  buttonsSection: {
    marginBottom: 32,
    gap: 12,
  },
  actionButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButton: {
    backgroundColor: '#ff6b35',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ff6b35',
  },
  secondaryButtonText: {
    color: '#ff6b35',
    fontSize: 16,
    fontWeight: '700',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  raceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  raceInfo: {
    flex: 1,
  },
  raceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  raceDistance: {
    fontSize: 12,
    color: '#999',
  },
  raceResult: {
    alignItems: 'flex-end',
  },
  won: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4CAF50',
    marginBottom: 4,
  },
  lost: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f44336',
  },
  winnings: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4CAF50',
  },
});

export default HomeScreen;
