import { useState, useEffect } from 'react'
import { supabase } from '../constants/supabase'
import { StyleSheet, View, Alert, Image, Text, SafeAreaView, ScrollView } from 'react-native'
import { Button, Input, Avatar, ListItem, Icon } from 'react-native-elements'
import { Session } from '@supabase/supabase-js'


export default function Account({ session }: { session: Session }) {
    const [loading, setLoading] = useState(true)
    const [expanded, setExpanded] = useState(false)
    const [expand, setExpand] = useState(false)
    const [expands, setExpands] = useState(true)
    const [username, setUsername] = useState('')
    const [team, setTeam] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [player, setPlayer] = useState("")



    useEffect(() => {
        if (session) getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')

            const { data, error, status } = await supabase
                .from('profiles')
                .select(`username, team, avatar_url,player`)
                .eq('id', session?.user.id)
                .single()
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setTeam(data.team)
                setAvatarUrl(data.avatar_url)
                setPlayer(data.player)
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    async function updateProfile({
        username,
        team,
        avatar_url,
        player
    }: {
        username: string
        team: string
        avatar_url: string
        player: string
    }) {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')

            const updates = {
                id: session?.user.id,
                username,
                team,
                avatar_url,
                player,
                updated_at: new Date(),
            }

            const { error } = await supabase.from('profiles').upsert(updates)

            if (error) {
                throw error
            }
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.space}>Account</Text>
                <ListItem.Accordion
                    containerStyle={{ backgroundColor: "#1a1a1a", borderRadius: "10px", marginHorizontal: 10, color: "#fff" }}
                    content={
                        <>
                            <Avatar
                                containerStyle={{ marginHorizontal: 10 }}
                                title="MD"
                                size="medium"
                                rounded
                                source={{ uri: avatarUrl || 'data:image/jpeg;base64,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' }}
                            />
                            <ListItem.Content>
                                <ListItem.Title style={styles.title}>{username || "N/A"}</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}> {session?.user?.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <View style={[styles.verticallySpaced, styles.mt20]}>
                        <Input style={styles.input} label="Email" value={session?.user?.email} disabled />
                    </View>
                    <View style={styles.verticallySpaced}>
                        <Input style={styles.input} label="Username" value={username || ''} onChangeText={(text) => setUsername(text)} />
                    </View>
                </ListItem.Accordion>
            </View>
            <View style={styles.container}>
                <Text style={styles.space}>Favorite Team</Text>
                <ListItem.Accordion
                    containerStyle={{ backgroundColor: "#1a1a1a", borderRadius: "10px", marginHorizontal: 10, color: "#fff" }}
                    content={
                        <>
                            <Avatar
                                containerStyle={{ marginHorizontal: 10 }}
                                title="MD"
                                size="medium"
                                rounded
                                source={{ uri: 'https://assets.stickpng.com/thumbs/58419d0aa6515b1e0ad75a6c.png' }}
                            />
                            <ListItem.Content>
                                <ListItem.Title style={styles.title}>{team}</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}> Los Angeles</ListItem.Subtitle>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <View style={[styles.verticallySpaced, styles.mt20]}>
                        <Input style={styles.input} label="Select Teams" value={team} onChangeText={(text) => setTeam(text)} />
                    </View>
                </ListItem.Accordion>
            </View>

            <View style={styles.container}>
                <Text style={styles.space}>Favorite Player</Text>
                <ListItem.Accordion
                    containerStyle={{ backgroundColor: "#1a1a1a", borderRadius: "10px", marginHorizontal: 10, color: "#fff" }}
                    content={
                        <>
                            <Avatar
                                containerStyle={{ marginHorizontal: 10 }}
                                title="MD"
                                size="medium"
                                rounded
                                source={{ uri: "https://images.sbs.com.au/dims4/default/8c0168c/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ftopics%2Fpublic%2Fgettyimages-1066599734.png" }}
                            />
                            <ListItem.Content >
                                <ListItem.Title style={styles.title}>{player}</ListItem.Title>
                                <ListItem.Subtitle style={styles.subtitle}> Point Guard</ListItem.Subtitle>
                            </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <View style={[styles.verticallySpaced, styles.mt20]}>
                        <Input style={styles.input} label="Select Player" value={player} onChangeText={(text) => setPlayer(text)} />
                    </View>
                </ListItem.Accordion>
            </View>


            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                    title={loading ? 'Loading ...' : 'Update'}
                    onPress={() => updateProfile({ username, team, avatar_url: avatarUrl, player })}
                    disabled={loading}
                />
            </View>

            <View style={styles.verticallySpaced}>
                <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
    },
    input: {
        color: "white",
    },
    bg: {
        color: "#000"
    },
    verticallySpaced: {
        paddingTop: 2,
        color: "white",
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 40,
    },
    space: {
        color: "#fff",
        marginHorizontal: 8,
        marginVertical: 8,
        fontSize: 17,
        fontWeight: "bold"
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    subtitle: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold"
    },
    avatar: {
        borderRadius: 5,
        overflow: 'hidden',
        maxWidth: '100%',
    },
    image: {
        objectFit: 'cover',
        paddingTop: 0,
    },
    noImage: {
        backgroundColor: '#333',
        // border: '1px solid rgb(200, 200, 200)',
        borderRadius: 5,
    },
})